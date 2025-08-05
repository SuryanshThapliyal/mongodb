import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
})


mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => { 
    console.error('MongoDB connection error:', err);
});

export const Book = mongoose.model('Book', bookSchema);