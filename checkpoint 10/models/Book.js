import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: String,
    genre : String, 
    author: [{ type: mongoose.Schema.Types.ObjectId, ref:'Author'}]
});

export const Book = mongoose.model('Book', bookSchema);