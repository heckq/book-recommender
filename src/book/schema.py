from pydantic import BaseModel
from typing import List, Optional

class Book(BaseModel):
    title: str
    authors: List[str]
    description: Optional[str] = ' '
    category: Optional[str] = ' '
    publisher: str
    publish_date: str
    price: float

class BookCollection(BaseModel):
    books: List[Book]