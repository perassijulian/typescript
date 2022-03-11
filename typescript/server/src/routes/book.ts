import { Router } from 'express';
import { getAllBooks, getSpecificBook, addNewBook } from '../controllers/bookController';

const bookRouter: Router = Router();

bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getSpecificBook)
bookRouter.post("/add", addNewBook)

export default bookRouter;