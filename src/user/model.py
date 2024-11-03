import uuid
from sqlalchemy import Column, String, ForeignKey, func
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from src.api.database import Base


class User(Base):
    __tablename__ = 'user'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, server_default=func.uuid_generate_v4())
    username = Column(String(50), nullable=False, unique=True)
    password = Column(String(255), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    avatar_url = Column(String(255), nullable=True)
    favorite_books_associations = relationship(
        'UserFavoriteBooks', back_populates='user'
    )
    read_later_books_associations = relationship(
        'UserReadLaterBooks', back_populates='user'
    )

class UserFavoriteBooks(Base):
    __tablename__ = 'user_favorite_books'

    user_id = Column(UUID(as_uuid=True), ForeignKey('user.id'), primary_key=True)
    book_id = Column(String(255), primary_key=True)
    user = relationship("User", back_populates="favorite_books_associations")


class UserReadLaterBooks(Base):
    __tablename__ = 'user_read_later_books'

    user_id = Column(UUID(as_uuid=True), ForeignKey('user.id'), primary_key=True)
    book_id = Column(String(255), primary_key=True)
    user = relationship("User", back_populates="read_later_books_associations")


