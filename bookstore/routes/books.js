import mongoose from 'mongoose';
import express from 'express';
import { createBook, deleteBook, getBooks, updateBook, aggregate } from '../controller/bookController.js';
const router = express.Router();
router.use(express.json());

router.post('/books', createBook);

router.get('/books', getBooks);

router.put('/books/:id', updateBook);

router.delete('/books/:id', deleteBook);

router.get('/books/aggre', aggregate);









export default router;