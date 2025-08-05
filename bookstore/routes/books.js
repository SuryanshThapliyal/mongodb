import mongoose from 'mongoose';
import express from 'express'
import {Book} from "../models/book.js"
const router = express.Router();
router.use(express.json());

router.post('/books', async (req, res) => {
    const { title, author, price, genre, inStock } = req.body;

    try {
        const book = await Book.create({
            title,
            author,
            genre,
            price,
            inStock
        });
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: 'Error creating book', error: error.message });
    }
});

router.get('/books', async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error: error.message });
    }
});













export default router;