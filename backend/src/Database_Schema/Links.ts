import mongoose from "mongoose";
import { object } from "zod";
import { required } from "zod/v4/core/util.cjs";


const Link_Schema = new mongoose.Schema({
      
    hash:{type:String},
    userId :{type:mongoose.Types.ObjectId , ref:"Users" , required:true  , unique:true}
})

const Links = mongoose.model("Links" , Link_Schema);


export default Links;