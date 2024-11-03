from typing import List, Any
from fastapi import FastAPI,APIRouter, HTTPException
from src.book.schema import Book,BookCollection
from src.book.service import BookService
from src.book.dataset import load_books, filter_books_by_genre

app = FastAPI(title="Book Recommender")
book_router = APIRouter()
book_service = BookService()

def transform_books(data: List[dict[str, Any]]) -> List[Book]:

    books = []
    for item in data:
        book = Book(
            title=item.get('Title'),
            authors=item.get('Authors', '').split(','),  # Assuming authors are comma-separated
            description=item.get('Description'),
            category=item.get('Category'),
            publisher=item.get('Publisher'),
            publish_date=item.get('Publish Date'),  # Fixing key to match sample data
            price=float(item.get('Price', 0).replace('$', '').strip())  # Ensure price is a float
        )
        books.append(book)
    return books

@book_router.get("/genre/{genre}", response_model=BookCollection)
async def get_books_by_genre(genre: str, skip: int = 0, limit: int = 13):
    books_df = load_books()
    if books_df.empty:
        raise HTTPException(status_code=404, detail="No books found.")

    filtered_books_df = filter_books_by_genre(books_df, genre)
    if filtered_books_df.empty:
        raise HTTPException(status_code=404, detail="No books found for this genre.")

    # Paginate the results
    books = [
        {
            "title": row['Title'],
            "authors": row['Authors'],
            "description": row['Description'],
            "category": row['Category'],
            "publisher": row['Publisher'],
            "publish_date": row['Publish Date'],
            "price": row['Price'],
        }
        for index, row in filtered_books_df.iterrows()
    ][skip: skip + limit]  # Apply pagination

    return BookCollection(books=books)

@book_router.get("/latest", response_model=BookCollection)
async def get_latest_books(skip: int = 0, limit: int = 13):
    """Retrieve the latest books with pagination."""
    books = await book_service.get_latest_books()
    if not books:
        raise HTTPException(status_code=404, detail="No latest books found")

    # Transform the book data for consistency
    transformed_books = transform_books(books)

    # Apply pagination
    paginated_books = transformed_books[skip: skip + limit]

    return BookCollection(books=paginated_books)