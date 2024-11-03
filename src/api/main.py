# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from src.auth.routes import auth_router
from src.book.route import book_router
from src.user.route import user_router

app = FastAPI(title='Book Recommender')

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(auth_router, prefix='/auth')
app.include_router(user_router, prefix='/user')
app.include_router(book_router, prefix='/book')

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000)  # Порт за замовчуванням 8000
