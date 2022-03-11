import express from "express";
import morgan from 'morgan';
import dotenv from "dotenv";
dotenv.config();

import bookRouter from './routes/book';

const PORT: string | undefined = process.env.PORT;

const app = express();

app.use('/books', bookRouter)

app.use(express.json());
app.use(morgan("dev"));

app.listen(PORT, () => {
    console.log("Server running at http://localhost:"+PORT)
})