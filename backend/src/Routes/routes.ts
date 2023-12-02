import express from 'express'
import { newJob } from '../Controller/comController.ts'

export const hate=express.Router()

hate.post('/post',newJob)