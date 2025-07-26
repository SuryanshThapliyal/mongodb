import {Article} from "./models/article.js";
import mongoose from 'mongoose';

await Article.insertMany([
    {
        title: "Understanding Mongoose",
        author: "John Doe",
        tags: ["mongodb", "mongoose", "nodejs"],
        createdAt: new Date()
    },
    {
        title: "Advanced Mongoose",
        author: "Jane Doe",
        tags: ["mongodb", "mongoose", "nodejs"],
        createdAt: new Date()
    },
    {
        title: "Mongoose Aggregation Framework",
        author: "John Smith",
        tags: ["mongodb", "mongoose", "aggregation"],
        createdAt: new Date()
    },
    {
        title: "Mongoose Schema Design",
        author: "Jane Smith",
        tags: ["mongodb", "mongoose", "schema"],
        createdAt: new Date()
    },
    {
        title: "Mongoose Relationships",
        author: "John Doe",
        tags: ["mongodb", "mongoose", "relationships"],
        createdAt: new Date()
    }
]);
console.log("Articles inserted successfully");