import mongoose from 'mongoose';

const author = new mongoose.Schema({
    name: "string",
    age: "number"
});
export const Author = mongoose.model('author', author);
const book = new mongoose.Schema({
    title: "string",
    genre: "string",
    author: [{ type: mongoose.Schema.Types.ObjectId, ref:'author'}]
});
export const Book = mongoose.model('book', book);