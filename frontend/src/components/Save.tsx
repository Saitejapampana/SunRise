import { useState } from "react"
import { job } from "../types/types"

const NewJobPost=({jobData}:{jobData:(job:job)=>void})=>{

    const [jobPost,setJobPost]=useState<job>({
        id:'',
        description:'',
        skillset:'',
        experience:0
    })

    const {id,description,skillset,experience} = jobPost

    const onInputChange=(change: React.ChangeEvent<HTMLInputElement>)=>{
        setJobPost({...jobPost,[change.target.name]:change.target.value})
    }

    const onTextareaChange=(change: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setJobPost({...jobPost,[change.target.name]:change.target.value})
    }

    const onSelectChange=(select: React.ChangeEvent<HTMLSelectElement>)=>{
        setJobPost({...jobPost,[select.target.name]:select.target.value})
    }
    const send=()=>{
        jobData(jobPost)

    }
    return(
        <>
        <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td>Company ID :</td>
                    <td><input type="text" name="id" value={id} onChange={(change)=>onInputChange(change)} /></td>
                </tr>
                <tr>
                    <td>Job Description</td>
                    <td><textarea name="description" value={description} onChange={(change)=>onTextareaChange(change)}></textarea></td>
                </tr>
                <tr>
                    <td>
                        <select name="skillset" value={skillset} onChange={(select)=>onSelectChange(select)}>
                            <option value="">Skill Set</option>
                            <option value="java">Java</option>
                            <option value=".net">.Net</option>
                            <option value="nodejs">NodeJS</option>
                            <option value="react">React</option>
                        </select>
                    </td>
                    <td><button>Add</button></td>
                </tr>
                <tr>
                    <td>
                        <select name="experience" value={experience} onChange={(select)=>onSelectChange(select)}>
                            <option value="">Experience</option>
                            <option value={0.1}>1 months</option>
                            <option value={0.2}>2 months</option>
                            <option value={0.3}>3 months</option>
                            <option value={0.4}>4 months</option>
                            <option value={0.5}>5 months</option>
                            <option value={0.6}>6 months</option>
                            <option value={0.7}>7 months</option>
                            <option value={0.8}>8 months</option>
                            <option value={0.9}>9 months</option>
                            <option value={10}>10 months</option>
                            <option value={11}>11 months</option>
                            <option value={12}>12 months</option>
                            <option value={13}>13 months</option>
                            <option value={14}>14 months</option>
                            <option value={15}>15 months</option>
                            <option value={16}>16 months</option>
                            <option value={17}>17 months</option>
                            <option value={18}>18 months</option>
                            <option value={19}>19 months</option>
                            <option value={20}>20 months</option>
                            <option value={21}>21 months</option>
                            <option value={22}>22 months</option>
                            <option value={23}>23 months</option>
                            <option value={24}>24 months</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>{experience} months Experience in {skillset}</td>
                    <td><button onClick={send}>Submit</button></td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default NewJobPost