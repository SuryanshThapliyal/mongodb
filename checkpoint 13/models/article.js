import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    title: String,
    author: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Article = mongoose.model('Article', articleSchema);

await mongoose.connect('mongodb://localhost:27017/aggregation');
console.log('Connected to MongoDB');