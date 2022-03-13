import axios from 'axios';
import { BookType } from '../interfaces';

const URL: string = '/books/add';

const addNewBook = async (bookInfo: BookType) => {
    const response = await axios.post(URL, bookInfo);
    return response.data;
}

const bookService = {
    addNewBook,
}

export default bookService