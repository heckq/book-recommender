"""delete book

Revision ID: 730d561d6a8b
Revises: 2304eb0e9b44
Create Date: 2024-11-01 20:06:52.379805

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = '730d561d6a8b'
down_revision: Union[str, None] = '2304eb0e9b44'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Drop foreign key constraints first
    op.drop_constraint('user_favorite_books_book_id_fkey', 'user_favorite_books', type_='foreignkey')
    op.drop_constraint('user_read_later_books_book_id_fkey', 'user_read_later_books', type_='foreignkey')

    # Alter column types after dropping constraints
    op.alter_column('user_favorite_books', 'book_id',
               existing_type=sa.UUID(),
               type_=sa.String(length=255),
               existing_nullable=False)
    op.alter_column('user_read_later_books', 'book_id',
               existing_type=sa.UUID(),
               type_=sa.String(length=255),
               existing_nullable=False)

    # Now drop the book table without cascade
    op.drop_table('book')


def downgrade() -> None:
    # Recreate the book table
    op.create_table('book',
        sa.Column('id', sa.UUID(), server_default=sa.text('uuid_generate_v4()'), autoincrement=False, nullable=False),
        sa.Column('website_id', sa.VARCHAR(length=255), autoincrement=False, nullable=False),
        sa.Column('created_at', postgresql.TIMESTAMP(), server_default=sa.text('now()'), autoincrement=False, nullable=True),
        sa.Column('updated_at', postgresql.TIMESTAMP(), server_default=sa.text('now()'), autoincrement=False, nullable=True),
        sa.PrimaryKeyConstraint('id', name='book_pkey'),
        sa.UniqueConstraint('website_id', name='book_website_id_key')
    )

    # Restore column types
    op.alter_column('user_favorite_books', 'book_id',
               existing_type=sa.String(length=255),
               type_=sa.UUID(),
               existing_nullable=False)
    op.create_foreign_key('user_favorite_books_book_id_fkey', 'user_favorite_books', 'book', ['book_id'], ['id'])

    op.alter_column('user_read_later_books', 'book_id',
               existing_type=sa.String(length=255),
               type_=sa.UUID(),
               existing_nullable=False)
    op.create_foreign_key('user_read_later_books_book_id_fkey', 'user_read_later_books', 'book', ['book_id'], ['id'])
