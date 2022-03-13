import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { BooksState, BookType } from '../interfaces';
import bookService from './bookService';

const initialState: BooksState = {
    books: [{
        title: "title",
        author: "author",
        isbn: "isbn",
    }],
};

export const addNewBook = createAsyncThunk('book/addNew', async (bookInfo: BookType, thunkAPI) => {
    try {
        return await bookService.addNewBook(bookInfo)
    } catch (error: any) {
        const message = 
        (error.response && 
            error.response.date && 
            error.response.data.message) || 
        error.message || 
        error.toString()
    return thunkAPI.rejectWithValue(message);
    }
})

export const bookSlice = createSlice({
    name: "bookSlice",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<BookType>) => {
            state.books.push(action.payload)
        } 
    },
    extraReducers: (builder)  => {
        builder
            .addCase(addNewBook.fulfilled, (state, action: PayloadAction<BookType>) => {
                state.books = action.payload
            })

    }
})

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;

