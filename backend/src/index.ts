import express from 'express'
import ConnectDB from './db';
const app = express();
ConnectDB();




app.post("/api/v1/signin" , (req,res)=>{

})

app.post("/api/v1/signup" ,(req,res)=>{

})

app.get("api/v1/content" ,(req,res)=>{

})
app.post("/api/v1/brain/share" ,(req,res)=>{

})




app.listen(3000,()=>{
    console.log("Server is running")
})