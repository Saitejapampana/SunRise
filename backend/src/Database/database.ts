import mongoose from "mongoose";

const Connection=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/SunRise').then(()=>{
        console.log('Database Connected');
    })
}

export default Connection;