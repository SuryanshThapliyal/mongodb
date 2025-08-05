import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import Account from './models/account.js';


const app = express();
app.use(express.json());
dotenv.config();

await mongoose.connect(process.env.MONGODB_URI)
console.log('Connected to MongoDB');


app.get('/transfer', async (req, res) => {
    res.json(await Account.find({}));
});


app.post('/transfer', async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { from, to, amount} = req.body;
        const fromAccount = await Account.findById(from).session(session);
        const toAccount = await Account.findById(to).session(session);

        if (!fromAccount || !toAccount) {
            throw new Error(' Invalid account');
        }
        if (fromAccount.balance < amount) {
            throw new Error('Insufficient balance');
        }
        fromAccount.balance -= amount;
        toAccount.balance += amount;

        await fromAccount.save({ session });
        await toAccount.save({ session });

        await session.commitTransaction();
        session.endSession();

        res.status(200).json({ message: 'Transfer successful' });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        res.status(500).json({ message: 'Transfer failed', error: error.message });
    }
});


app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});