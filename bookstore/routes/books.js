import mongoose from 'mongoose';
import express from 'express';
import { createBook, deleteBook, getBooks, updateBook } from '../controller/bookController.js';
const router = express.Router();
router.use(express.json());

router.post('/books', createBook);

router.get('/books', getBooks);

router.put('/books/:id', updateBook);

router.delete('/books/:id', deleteBook);










export default router;