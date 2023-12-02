import express from "express";
import Connection from "./Database/database";
import cors from 'cors';
import { hate } from "./Routes/routes";

Connection();

const App=express();

App.use(express.json());

App.use(cors());

App.use('/', hate)

App.listen(6886,()=>{
    console.log('Server Running on 6886 port number');
})