import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
    title: String,
    author: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

articleSchema.index({ title: 1, author: 1 });
articleSchema.index({ createdAt: -1 });
export const Article = mongoose.model('Article', articleSchema);