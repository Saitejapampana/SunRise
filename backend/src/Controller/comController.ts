import { Request, Response } from "express";
import { postJob } from "../Service/service.ts";

export const newJob=async (request:Request,response:Response)=>{
    const {id,description,skillset,experience}=request.body
    await postJob(id,description,skillset,experience)
    response.send('Job Posted Successfully...')
}