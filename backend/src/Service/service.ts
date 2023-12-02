import { companyModel } from "../Model/Schema.ts"

export const postJob=(id:string,description:string,skillset:string,experience:number)=>{
    const job= new companyModel({id,description,skillset,experience})
    return job.save()
}