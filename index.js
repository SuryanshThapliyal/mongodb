import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import {User} from './db.js';

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=> {
    console.log('Connected to MongoDB');
})
.catch(err=> {
    console.error('Error connecting to MongoDB:', err);
})


User.create({
    id: uuidv4(),
    name : 'suryansh thapliyal',
    email: 'suryansh@exame.com',
    age: 25,
    hobbies: ['reading', 'gaming'],
    isVerified: true
})
.then((user) => console.log('User created:', user))
.catch((err) => {
    if (err.code === 11000) {
        console.error('Error: Duplicate key error. User with this email already exists.');
    }else 
    console.error('Error creating user:', err)
});