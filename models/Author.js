import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    name: String,
    age: Number
});

export const Author = mongoose.model('Author', authorSchema);
