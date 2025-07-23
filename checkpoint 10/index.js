import mongoose from "mongoose";
import express from "express";
import authorRoutes from './routes/author.js';
import bookRoutes from './routes/books.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/library')
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.error("Failed to connect to MongoDB", err);
});

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

app.listen(3000, () => {
    console.log('Server is running on port ${http://localhost:3000}');
});