import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        index: true,
    },
    genre: String,
    publishedYear: Number
    
});

export const Book = mongoose.model('Book', bookSchema);