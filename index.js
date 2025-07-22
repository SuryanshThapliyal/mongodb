import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import {Book, Author} from './db.js';

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=> {
    console.log('Connected to MongoDB');
})
.catch(err=> {
    console.error('Error connecting to MongoDB:', err);
})

const id = "687f537154352c3bdd58994c";
const newAuthor= await Author.findById(id)
console.log(newAuthor);

let newBook;
try{
newBook= await Book.create({
    title: "gidagedigedagadado",
    genre: "fiction",
    author: [newAuthor._id]
})
console.log('New book created:', newBook);
}
catch(err) {
    console.error('Error creating book:', err);
}

const findBooksByAuthor = await Book.find({author:[newAuthor._id]}).populate('author');
console.log('Books by author:', findBooksByAuthor);
