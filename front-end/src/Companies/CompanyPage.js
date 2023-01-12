import "./CompanyPage.css"
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../Api";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function CompanyPage(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [page, setPage] = useState([]);
  const [jobs, setJobs] = useState([]);
  const { handle } = useParams();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

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
    <div className="CompanyPage">
      <Navigation token={token} handleLogout={handleLogout}/>
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

export default CompanyPage;

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
