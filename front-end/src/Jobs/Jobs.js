import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import JoblyApi from "../Api";

function Jobs() {
    const [jobs, setJobs] = useState([])
    
    useEffect(() => {
        async function data() {
            const jobList = await JoblyApi.getJobs()
            setJobs(jobList)
            return jobList
        }
        data()
    }, [])
    console.log(jobs)

    return (
        <div className="Jobs">
            <ul>
                {jobs.map(job => {
                    return <Link to={`/jobs/${job.id}`}><li>{job.title}</li></Link>
                })}
                
            </ul>
        </div>
    )
}

export default Jobs;