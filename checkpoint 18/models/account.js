import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
    owner: String,
    balance: Number,
});


export default mongoose.model('Account', accountSchema);