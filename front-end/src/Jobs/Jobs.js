import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import JoblyApi from "../Api";
import CompanyCard from "../Companies/CompanyCard";
import JobCard from "./JobCard";
import Navigation from "../Navigation/Navigation";

function Jobs() {
    const [jobs, setJobs] = useState([])
    const [token, setToken] = useState(localStorage.getItem("token"))
    
    useEffect(() => {
        async function data() {
            const jobList = await JoblyApi.getJobs()
            setJobs(jobList)
            return jobList
        }
        data()
    }, [])

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    return (
        <div className="Jobs">
            <Navigation token={token} handleLogout={handleLogout}/>
            <ul>
                {jobs.map(job => {
                    return <Link to={`/jobs/${job.id}`}><JobCard title={job.title} salary={job.salary} equity={job.equity} company={job.companyName}/></Link>
                })}
                
            </ul>
        </div>
    )
}

export default Jobs;