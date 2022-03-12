import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import BookComponent from './BookComponent';

const BooksDisplay = () => {
  const books = useSelector((state: RootState) => state.book.books);
  console.log(books);

  return (
    <div>
      {books.map((book) => {
        return <BookComponent book={book} />
      })}
    </div>
  )
}

export default BooksDisplay