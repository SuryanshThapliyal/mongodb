import mongoose from 'mongoose';
import {Book} from './model/db.js';
import { Article } from './model/article.js';

await mongoose.connect('mongodb://localhost:27017/index')
console.log('Connected to MongoDB');


Article.syncIndexes();
console.log('Index synced for Article');

// await Article.create([{
//     title: 'Understanding Mongoose',
//     author: 'John Doe',
//     tags: ['mongodb', 'mongoose', 'nodejs'],
//     createdAt: Date.now()
// },
// {
//     title: 'Learning Mongoose Basics',
//     author: 'John Doe',
//     tags: ['mongodb', 'mongoose', 'basics'],
//     createdAt: Date.now()
// },
// {
//     title: 'Advanced Mongoose Techniques',
//     author: 'Jane Smith',
//     tags: ['mongodb', 'mongoose', 'advanced'],
//     createdAt: Date.now()
// }]);
let article
try{
article = await Article.find({author: 'John Doe', title: 'Learning Mongoose Basics'})
if(article.length> 0) {
    console.log('article found');
}
else{
    console.log('No article found');
}
}
catch(err){
    console.error('Error finding article:', err);
}
console.log(article);
