import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    console.log('Connected to MongoDB');
})
.catch(err=> {
    console.error('Error connecting to MongoDB:', err);
})


const userSchema = new mongoose.Schema({
    name: String,
    age:Number,
    isDev: Boolean
});

const User = mongoose.model('User', userSchema);

const user = new User({
    name: "yajat",
    age: 20,
    isDev: true
});
user.save()
.then(() => {
    console.log('User saved successfully');
})
.catch(err => {
    console.error('Error saving user:', err);
});