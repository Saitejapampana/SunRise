import express from "express";
import Connection from "./Database/database";
import cors from 'cors';

Connection();

const App=express();

App.use(express.json());

App.use(cors());

App.listen(6886,()=>{
    console.log('Server Running');
})