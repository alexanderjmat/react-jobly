import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../Api";
import { Link } from "react-router-dom";

function CompanyCard(props) {
  const [page, setPage] = useState([]);
  const [jobs, setJobs] = useState([]);
  const { handle } = useParams();

  useEffect(() => {
    async function getHandle() {
      const getCompany = await JoblyApi.getCompany(handle);
      setPage(getCompany);
      return getCompany;
    }
    getHandle();
  }, []);

  useEffect(() => {
    async function getJobs() {
      const companyJobs = await JoblyApi.getCompanyJobs(handle);
      setJobs(companyJobs);
      return companyJobs;
    }
    getJobs();
  }, []);

  return (
    <div className="CompanyCard">
      <Link to="/companies"><button>Go back</button></Link>
      <h2>{page.name}</h2>
      <p>{page.description}</p>
      <h2>Current Openings:</h2>
      <ul>
        {jobs.map((job) => {
          return <Link to={`/jobs/${job.id}`}><li>{job.title}</li></Link>;
        })}
      </ul>
    </div>
  );
}

export default CompanyCard;

/* useEffect(() => {
    async function updateJobs() {
        setJobComponent(<ul>
            {jobs.map(job => {
                <li>{job.title}</li>
            })}
          </ul>)
    }
    updateJobs()
  }, jobs) */
