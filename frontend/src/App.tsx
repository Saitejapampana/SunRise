import { postJob } from './apicalls/apicalls'
import NewJobPost from './components/Save'
import { job } from './types/types'

function App() {
  const jobData=async (job:job)=>{
    await postJob(job)
  }

  return (
    <>
      <NewJobPost jobData={jobData} />
    </>
  )
}

export default App