import mongoose from 'mongoose';
import {Article} from './models/article.js';

await Article.insertMany(
    [
    {
    "title": "Understanding MongoDB Injection",
    "content": "This article explains what NoSQL injection is and how to prevent it.",
    "tags": ["security", "mongodb", "injection"]
    },
    {
    "title": "How to Sanitize Requests in Express",
    "content": "Express middleware like helmet and mongo-sanitize can secure your app.",
    "tags": ["express", "security", "middleware"]
    },
    {
    "title": { "$gt": "" },
    "content": "Trying to inject MongoDB operator via title.",
    "tags": ["attack", "malicious"]
    },
    {
    "title": "Normal Article with Clean Data",
    "content": "All fields are safe here, no injections.",
    "tags": ["clean"]
    },
    {
    "title": "Another Injection Test",
    "content": { "$ne": "malicious" },
    "tags": ["test"]
    }
]);
console.log("Sample articles inserted successfully.");
