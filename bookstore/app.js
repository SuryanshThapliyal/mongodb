import express from 'express';
import books from './routes/books.js';
import helmet from 'helmet'

const app = express();
app.use(express.json());
app.use(helmet());
app.use('/', books);




app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});