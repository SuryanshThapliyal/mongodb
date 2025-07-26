import mongoose from 'mongoose';
import {Article} from './models/article.js';

const page = 2;
const limit = 5;

const paginated = await Article.find()
.sort({ createdAt: -1 }) 
.skip((page - 1) * limit)
.limit(limit);

console.log(`Page ${page} of articles:`, paginated);