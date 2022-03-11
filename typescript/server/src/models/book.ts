import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const bookSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    
    author: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;