import { Request, Response, NextFunction } from 'express';
import Book from '../models/book';
import { BookType } from '../interfaces';

class BookController {
    public getAllBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const allBooks: BookType[] = await Book.find({})
            res.status(200).json(allBooks);
        } catch (error) {
            res.status(400);
            console.log(error)
        };
    }
    
    public getSpecificBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const bookSelected: BookType | null = await Book.findOne({_id: req.params.id})
            if (bookSelected) {
                res.status(200).json(bookSelected);
            } else {
                res.status(404)
                throw new Error('There is no book with that id')
            }
        } catch (error) {
            res.status(400);
            console.log(error)
        };
    }
    
    public addNewBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const newBook: BookType = await Book.create(req.body);
            res.status(201).json(newBook);
        } catch (error) {
            res.status(400);
            console.log(error)
        };
    }
}

export const bookController: BookController = new BookController();