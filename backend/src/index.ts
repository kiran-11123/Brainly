import express from 'express'
import ConnectDB from './db';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import Contents_Router from './routes/Contents';
import Auth_Router from './routes/Authentication_routes';
const app = express();
ConnectDB();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


app.use("/api/v1/users",Auth_Router);
app.use("/api/v1/data" , Contents_Router);




app.listen(3000,()=>{
    console.log("Server is running")
})