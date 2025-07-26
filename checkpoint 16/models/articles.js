import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: String,
    body: String,
    createdAt: { type: Date, default: Date.now }
});

export const Article = mongoose.model("Article", articleSchema);
