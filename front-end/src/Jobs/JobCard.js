import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../Api";
import { Link } from "react-router-dom";

function JobCard() {
  const [page, setPage] = useState([]);
  const [component, setComponent] = useState(<div><p>Loading</p></div>);
  const { id } = useParams();

  useEffect(() => {
    async function getTitle() {
      const getJob = await JoblyApi.getJob(id);
      setPage(getJob);
      return getJob;
    }
    getTitle();
  }, []);

  useEffect(() => {
    async function updateComponent() {
        setComponent(
            <div>
              <h2>{page.title}</h2>
              <p>Posted by <Link to={`/companies/${page.company.handle}`}>{page.company.name}</Link></p>
            </div>
          );
    }
    console.log(page)
    updateComponent()
  }, [page])

  return <div className="JobCard">
    {component}
  </div>;
}

export default JobCard;
