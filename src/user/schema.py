from pydantic import BaseModel, EmailStr, UUID4, constr, HttpUrl
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    username: constr(strip_whitespace=True, min_length=1)
    email: EmailStr
    avatar_url: Optional[HttpUrl] = None

class UserCreate(UserBase):
    password: constr(min_length=6)

class UserRead(UserBase):
    id: UUID4

    class Config:
        from_attributes=True

class UserUpdate(BaseModel):
    username: Optional[str] = None
    profile_picture: Optional[HttpUrl] = None
    password: Optional[constr(min_length=6)] = None

    class Config:
        from_attributes=True


class UserLogin(BaseModel):
    email: EmailStr
    password: str
from pydantic import BaseModel

class UserResponse(BaseModel):
    id: str
    username: str
    email: str
