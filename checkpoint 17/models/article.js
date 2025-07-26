import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    title: String,
    content: String,
    tags: [String],
});



await mongoose.connect('mongodb://localhost:27017/ddb');
console.log('Connected to MongoDB');

export const Article = mongoose.model("Article", articleSchema);
