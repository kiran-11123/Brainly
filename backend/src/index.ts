import express from 'express'
import ConnectDB from './db';
import cors from 'cors';
import cookieParser from 'cookie-parser'
const app = express();
ConnectDB();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));



app.post("/api/v1/brain/share" ,(req,res)=>{

})




app.listen(3000,()=>{
    console.log("Server is running")
})