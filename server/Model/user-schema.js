import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    phoneNumber:{
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 12,
    },
    password: {
        type:String,
        required: true,
        trim: true,
        min: 4,
        max: 10,
    }
})

const User= mongoose.model('user',userSchema );
export default User;