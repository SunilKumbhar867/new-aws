import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

app.post('/id',(req,res)=>{
    res.send('hello')
})


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`API IS RUNNING ON ${port}`);
})