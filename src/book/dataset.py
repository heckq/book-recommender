import pandas as pd
import os
import logging
# Configure loggin

logging.basicConfig(level=logging.INFO)


def clean_authors_column(df):
    def convert_authors(authors_str):
        authors_str = authors_str.replace("By ", "")
        return [author.strip() for author in authors_str.split(",")]

    df['Authors'] = df['Authors'].apply(convert_authors)
    return df

def load_books():
    file_path = r"C:\Users\devic\projects\PYTHON\FastAPI_course\book_recommender_server\src\book\BooksDataset.csv"
    if not os.path.exists(file_path):
        logging.error("Error: 'BooksDataset.csv' not found.")
        return pd.DataFrame()

    try:
        df = pd.read_csv(file_path)
        logging.info(f"Loaded books data: {df.head()}")

        # Ensure necessary columns are present and strip whitespace from column names
        required_columns = ['Title', 'Authors', 'Description', 'Category', 'Publisher', 'Publish Date', 'Price']
        missing_columns = [col for col in required_columns if col not in df.columns]

        if missing_columns:
            logging.error(f"Error: Missing columns in CSV: {missing_columns}")
            return pd.DataFrame()

        df.columns = df.columns.str.strip()
        df['Description'] = df['Description'].fillna('')
        df['Category'] = df['Category'].fillna('')

        # Clean up the 'Price' column to extract numerical values
        df['Price'] = df['Price'].str.extract(r'(\d+\.\d+)').astype(float)

        # Clean the 'Authors' column to ensure it’s in list format
        df = clean_authors_column(df)

        return df
    except Exception as e:
        logging.error(f"Error loading CSV file: {e}")
        return pd.DataFrame()


def filter_books_by_genre(df, genre):
    """Filter books by genre."""
    return df[df['Category'].str.contains(genre, case=False, na=False)]


def get_book_data_sorted_by_year(df):
    """Get book data sorted by publication year."""
    df = df.copy()  # Avoid SettingWithCopyWarning by creating a copy
    df['Publish Date'] = pd.to_datetime(df['Publish Date'], errors='coerce')  # Handle conversion errors
    return df.sort_values(by='Publish Date', ascending=False)


# Example usage
if __name__ == "__main__":
    books_df = load_books()
    if books_df is not None and not books_df.empty:
        filtered_books = filter_books_by_genre(books_df, 'Horror')

        if not filtered_books.empty:
            # Sort the filtered books by publication date
            sorted_books = get_book_data_sorted_by_year(filtered_books)
            print("Filtered and Sorted Books in Horror Genre:\n", sorted_books)
        else:
            print("No books found in the Horror genre.")
    else:
        print("No books available.")
