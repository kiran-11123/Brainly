import mongoose from "mongoose";
import { md5_base64 } from "zod/v4/core/regexes.cjs";

const Content_Schema = new mongoose.Schema({

    title:{type:String},
    link:{type:String},
    type:{type:String , enum:["youtube" , "twitter" , "pdf" , "image" , "text"]},
    tags:[{type:mongoose.Types.ObjectId , ref:'Tag'}],
    userId :{type:mongoose.Types.ObjectId , ref:'Users' ,required:true}

})


const Contents = mongoose.model("Contents" , Content_Schema);


export default Contents;