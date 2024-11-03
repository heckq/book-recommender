from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from src.api.database import get_session
from src.auth.util import create_token, verify_password, get_current_user
from src.user.model import User
from src.user.schema import UserCreate, UserRead, UserLogin, UserUpdate
from src.user.service import UserService

user_router = APIRouter()
user_service = UserService()

@user_router.get("/", response_model=UserRead)
async def get_user(session: AsyncSession = Depends(get_session), current_user: dict = Depends(get_current_user)):
    user_id = current_user.get("user_id")
    user = await user_service.get_user_by_id(user_id, session)  # Changed to use user_id
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return user

@user_router.post('/login', response_model=str)
async def login(user_data: UserLogin, session: AsyncSession = Depends(get_session)):
    user = await user_service.get_user_by_email(user_data.email, session)
    if not user or not verify_password(user_data.password, user.password):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid credentials")
    return create_token(user.id)

@user_router.get('/me', response_model=UserRead)
async def get_current_user_info(current_user: User = Depends(get_current_user)):
    return current_user

@user_router.patch('/update', response_model=UserRead)
async def update_user(user_update_data: UserUpdate, current_user: User = Depends(get_current_user),
                      session: AsyncSession = Depends(get_session)):
    user = await user_service.update_user(current_user.id, user_update_data, session)
    return user

@user_router.delete("/", response_model=UserRead)
async def delete_user(session: AsyncSession = Depends(get_session), current_user: dict = Depends(get_current_user)):
    user_id = current_user.get("user_id")  # Get user_id from current_user
    return await user_service.delete_user(user_id, session)
