from sqlalchemy import select, update, delete
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession
from typing import Sequence
from src.user.exception import  user_not_found_by_username
from src.auth.exception import user_already_exists
from src.api.exception import create_db_error_exception
from src.user.exception import user_not_found_by_id
from src.user.model import User
from src.user.schema import UserCreate, UserUpdate
from src.auth.util import get_password_hash


class UserService:
    async def create_user(self, user_data: UserCreate, session: AsyncSession) -> User:
        try:
            if await self.user_exists(user_data.username, session):
                raise user_already_exists

            hashed_password = get_password_hash(user_data.password)
            new_user = User(**user_data.dict(exclude={"password"}), password=hashed_password)
            session.add(new_user)
            await session.commit()
            await session.refresh(new_user)
            return new_user
        except SQLAlchemyError as e:
            raise create_db_error_exception("user", "create", e)

    async def get_user_by_email(self, email: str, session: AsyncSession) -> User:
        try:
            result = await session.execute(select(User).where(User.email == email))
            return result.scalars().first()
        except SQLAlchemyError as e:
            raise create_db_error_exception("user", "fetch_email", e)

    async def update_user(self, user_id: str, user_update_data: UserUpdate, session: AsyncSession) -> User:
        try:
            user = await session.get(User, user_id)
            if not user:
                raise user_not_found_by_id

            for key, value in user_update_data.dict(exclude_unset=True).items():
                if key == "password" and value:
                    value = get_password_hash(value)
                setattr(user, key, value)
            await session.commit()
            return user
        except SQLAlchemyError as e:
            raise create_db_error_exception("user", "update", e)

    async def delete_user(self, user_id: str, session: AsyncSession) -> User:
        try:
            user = await session.get(User, user_id)
            if not user:
                raise user_not_found_by_id

            await session.delete(user)
            await session.commit()
            return user
        except SQLAlchemyError as e:
            raise create_db_error_exception("user", "delete", e)

    async def user_exists(self, username: str, session: AsyncSession) -> bool:
        try:
            result = await session.execute(select(User).where(User.username == username))
            return result.scalars().first() is not None
        except SQLAlchemyError as e:
            raise create_db_error_exception("user", "check_existence", e)

    async def get_user_by_username(self, username: str, session: AsyncSession) -> User:
        try:
            result = await session.execute(select(User).where(User.username == username))
            user = result.scalars().first()
            if not user:
                raise user_not_found_by_username
            return user
        except SQLAlchemyError as e:
            raise create_db_error_exception("user", "fetch_username", e)
