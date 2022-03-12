import React from 'react'
import { BookType } from '../../../interfaces'

interface BookComponentProps {
  book: BookType,
}

const BookComponent = ({book}: BookComponentProps) => {
  return (
    <div>
      <h4>{book.title}</h4>
      <h4>{book.author}</h4>
      <h4>{book.isbn}</h4>
    </div>
  )
}

export default BookComponent