import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const user = new mongoose.Schema({
id:{
    type: String,
    default: uuidv4,
    required: true,
    unique: true,
},
name:{
    type: String,
    required: true,
    minlength: 3,
},
email:{
    type: String,
    required: true,
    validate:{
        validator: (v)=> v.includes('@'),
        message: props=> `${props.value} is not a valid email!`
    },
    unique: true
},
age:{
    type: Number,
    validate:{
        validator: (v)=> v > 13&& v < 60,
        message: props=> `${props.value} is not a valid age!`
    }
},

hobbies: {
    type: [String],
    minlength: 1
}, 
isVerified:{
    type: Boolean,
    default: false
}

})


export const User = mongoose.model('User', user);