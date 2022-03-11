import express from "express";
import morgan from 'morgan';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import bookRouter from './routes/book';

const PORT: string = process.env.PORT ? process.env.PORT : "3001";
const MONGO_URI: string = process.env.MONGO_URI ? process.env.MONGO_URI : "";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use('/books', bookRouter)

mongoose.connect(MONGO_URI)
    .then(() => app.listen(PORT, () => {console.log("Server running at http://localhost:"+PORT)}))
    .catch((err) => console.log(err));