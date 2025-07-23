import express from 'express';
import {Author} from '../models/Author.js';

const router = express.Router();

router.post('/', async (req, res)=> {
    try{
        const author = await Author.create(req.body);
        res.status(201).json(author);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }   
});

router.get('/', async (req, res)=>{
    try{
        const authors = await Author.find();
        res.json(authors);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

export default router;