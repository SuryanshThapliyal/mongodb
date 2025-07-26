import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    title: String,
    author: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});


await mongoose.connect('mongodb://localhost:27017/pagination');
console.log('Connected to MongoDB');

export const Article = mongoose.model('Article', articleSchema);
