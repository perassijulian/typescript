import { Router } from 'express';
import { bookController } from '../controllers/bookController';

const bookRouter: Router = Router();

bookRouter.get("/", bookController.getAllBooks)
bookRouter.get("/:id", bookController.getSpecificBook)
bookRouter.post("/add", bookController.addNewBook)

export default bookRouter;