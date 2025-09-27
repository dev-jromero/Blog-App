import { Schema } from "mongoose";
import mongoose from "mongoose";

const commetSchema =new Schema({
    user:{
        type:Schema.Types.ObjectId, 
        ref:"User", 
        required:true,
    },
    post:{
        type:Schema.Types.ObjectId, 
        ref:"Post", 
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
},{timestamps:true})

export default mongoose.model("Comment",commetSchema)