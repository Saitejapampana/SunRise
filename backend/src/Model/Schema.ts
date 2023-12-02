import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
    {
        id:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        skillset:{
            type:String,
            required:true
        },
        experience:{
            type:Number,
            required:true
        }
    }
)

export const companyModel=mongoose.model('company',companySchema)