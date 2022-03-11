import { Request, Response, NextFunction } from 'express';

export const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("get all books");
}

export const getSpecificBook = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("get specific book");
}

export const addNewBook = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("add new book");
}

