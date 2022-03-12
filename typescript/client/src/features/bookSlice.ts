import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BooksState, BookType } from '../interfaces';

const initialState: BooksState = {
    books: [{
        title: "title",
        author: "author",
        isbn: "isbn",
    }],
};

export const bookSlice = createSlice({
    name: "bookSlice",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<BookType>) => {
            state.books.push(action.payload)
        } 
    }
})

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;

