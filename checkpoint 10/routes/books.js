import express from 'express';
import {Book} from '../models/Book.js';

const router = express.Router();

router.post('/', async (req, res)=> {
    try{
        const book = await Book.create(req.body);
        res.status(201).json(book);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }   
});


router.get('/', async (req, res)=>{
try{
    const books = await Book.find().populate('author')
    res.json(books)
}
catch(err){
    res.status(500).json({message: err.message});
}
});

export default router;