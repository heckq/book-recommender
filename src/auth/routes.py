import uuid
from fastapi import APIRouter, Depends, Response, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from starlette.responses import JSONResponse

from src.api.database import get_session
from src.auth.exception import invalid_data
from src.auth.util import verify_password, get_current_user
from src.user.exception import user_not_found_by_email
from src.user.route import user_service
from src.user.schema import UserCreate, UserLogin, UserResponse, UserBase, UserRead

auth_router = APIRouter()

async def set_user_session_cookie(user_id: str, response: Response):
    response.set_cookie(key="user_id", value=str(user_id), httponly=True, secure=True)

@auth_router.post('/create-user', response_model=uuid.UUID, status_code=201)
async def create_user(user: UserCreate, response: Response, session: AsyncSession = Depends(get_session)):
    new_user = await user_service.create_user(user, session)
    await set_user_session_cookie(new_user.id, response)  # Set user session cookie
    return new_user.id

@auth_router.post('/login', response_model=dict, status_code=200)
async def login_user(login_data: UserLogin, response: Response, session: AsyncSession = Depends(get_session)):
    email = login_data.email
    password = login_data.password
    user = await user_service.get_user_by_email(email, session)

    if user is None:
        raise HTTPException(status_code=404, detail="User not found with this email")

    if not verify_password(password, user.password):
        raise HTTPException(status_code=401, detail="Invalid password")

    await set_user_session_cookie(user.id, response)  # Set user session cookie
    return {"message": "Login successful", "user_id": user.id}


@auth_router.get('/me', response_model=UserRead)  # Changed to UserRead to return full user details
async def get_current_user(current_user: UserRead = Depends(get_current_user)):
    return current_user

@auth_router.get('/logout', status_code=200)
async def logout_user(response: Response):
    response.delete_cookie("user_id")  # Remove user session cookie
    return JSONResponse(content={"message": "Logout successful"})
