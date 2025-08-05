import express from 'express';
import books from './routes/books.js';

const app = express();
app.use(express.json());
app.use('/', books);




app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});