from typing import List
import logging
import asyncio
from src.book.dataset import load_books, filter_books_by_genre, get_book_data_sorted_by_year


class BookService:
    async def get_books_by_genre(self, genre: str) -> List[dict]:
        logging.info(f"Fetching books for genre: {genre}")
        try:
            # Завантаження даних з CSV у фоновому потоці
            df = await asyncio.to_thread(load_books)
            logging.info("Books loaded successfully.")

            # Фільтрація даних по жанру та сортування
            filtered_books = await asyncio.to_thread(filter_books_by_genre, df, genre)
            sorted_books = await asyncio.to_thread(get_book_data_sorted_by_year, filtered_books)

            return sorted_books.head(10).to_dict(orient='records')
        except Exception as e:
            logging.error(f"Error fetching books for genre {genre}: {e}")
            raise

    async def get_latest_books(self) -> List[dict]:
        logging.info("Fetching latest books.")
        try:
            # Завантаження даних з CSV та сортування
            df = await asyncio.to_thread(load_books)
            sorted_books = await asyncio.to_thread(get_book_data_sorted_by_year, df)
            return sorted_books.head(10).to_dict(orient='records')
        except Exception as e:
            logging.error(f"Error fetching latest books: {e}")
            raise


async def main():
    book_service = BookService()
    books = await book_service.get_books_by_genre('Horror')
    print(books)  # Виводимо результат у консоль


if __name__ == "__main__":
    asyncio.run(main())
