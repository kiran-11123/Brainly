import express from 'express'
import Contents from '../Database_Schema/contents'
const Contents_Router = express.Router();
import { Auth_Middleware } from '../middlewares/Auth_middleware';
import Links from '../Database_Schema/Links';
import { random } from './utils';
Contents_Router.get("/content" , Auth_Middleware , async(req,res)=>{
        
    try{
         
        //@ts-ignore
        const userId = req.user.user_id;

        const content_data = await Contents.find({
            userId:userId
        }).populate("userId","username")

        if(content_data.length ===0){
            return res.status(403).json({
                message:"Contents are Empty...",
                ok:false,
            })
        }

        return res.status(200).json({
            message:"Data Feteched Successfully...",
            ok:true,
            data:content_data
        })

        
    }
    catch(er){
         return res.status(500).json({
            message:"Internal Server Error",
            ok:false
         })
    }
})

Contents_Router.post("/content" , Auth_Middleware , async(req,res)=>{
      
    
   try{
         
         const title = req.body.title
         const link = req.body.link;
         const type = req.body.type;
         //@ts-ignore
         const userId = req.user.user_id;

         await Contents.create({
            title:title,
            link:link,
            type:type,
            userId:userId,
            tags:[]


         })

         return res.status(200).json({
            ok:true,
            message:"Content Added"
         })

   }
   catch(er){
    return res.status(500).json({
        message:"Internal Server Error",
        error:er
    })
   }



})

Contents_Router.delete("/delete_content" , async(req,res)=>{
       
    try{

        const content_id = req.body.contentId;

        await Contents.deleteMany({
            content_id,
            //@ts-ignore
            userId:req.user.user_id

        })

        return res.status(200).json({
            message:"Content Deleted Successfully..",
            ok:true
        })



    }
    catch(er){
         
        return res.status(500).json({
            message:"Internal Server Error..",
            error:er,
            ok:false
        })
    }
})

Contents_Router.post("/share"  , Auth_Middleware,async(req,res)=>{
      
    try{
        
         //@ts-ignore
        const userId = req.user.user_id;

        const share = req.body.share;

        if(share){
             await Links.create({
                userID:userId,
                hash :random(10)
             })
        }
        else{
             
            await Links.deleteOne({
                //@ts-ignore

                userId:req.user.user_id
            })
        }

        return res.status(200).json({
             message : "Updated Sharable Link"
        })



    }
    catch(er){

        return res.status(500).json({
             message:"Internal Server Error",
             ok:false,
             error:er
        })
         
    }
})

export default Contents_Router;