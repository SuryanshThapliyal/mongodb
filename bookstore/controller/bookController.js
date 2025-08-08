import express from 'express';
import mongoose from 'mongoose';
import {Book} from '../models/book.js';
import { Aggregate } from 'mongoose';

export const createBook = async (req, res) => {
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
};


export const getBooks = async (req, res) => {
    try {
        const {title, author, genre} = req.query;
        const books = await Book.find({
            $or:[
                {title:title}, {author: author}, {genre: genre}
            ]
    })
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error: error.message });
    }
};


export const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );
    res.json(book);
} catch(err){
    res.status(500).json({error: error.message});
}
};

export const deleteBook = async (req, res) => {
    try {
        
        if(Book.find({_id: req.params.id})){
        const books = await Book.deleteOne({_id: req.params.id})
        res.status(200).json('Successfully deleted book')
        }
        else {
            res.status(404).json('book do not exist')
        }
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}

export const aggregate = async (req, res) => {
    const pipeline = [
        {count: "totalbooks" } 
    ]
    const result = Book.ggregate(pipeline);

};