import axios from "axios";
import { job } from "../types/types";

export const postJob=async (job:job)=>{
    return await axios.post('http://localhost:6886/post',job)
}