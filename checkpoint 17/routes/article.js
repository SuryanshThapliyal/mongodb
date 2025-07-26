import express from 'express';
import joi from 'joi';
import {Article} from '../models/article.js';

const router = express.Router();

const articleSchema = joi.object({
    title: joi.string().min(3).max(100).required(),
    content: joi.string().min(10).required(),
    tags: joi.array().items(joi.string()).optional()
});

router.get('/', async (req, res) => {
    res.json(await Article.find({}));
});

router.post('/', (req, res) => {
    const result = articleSchema.validate(req.body);
    if (result.error) {
        return res.status(400).send(result.error.details[0].message);
    }
    else {
        Article.create(req.body)
            .then(article => res.status(201).send(article))
            .catch(err => res.status(500).send(err.message));
    }
}); 
export default router;