import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../Api";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function JobPage() {
  const [page, setPage] = useState([]);
  const [component, setComponent] = useState(<div><p>Loading</p></div>);
  const { id } = useParams();
  const [token, setToken] = useState(localStorage.getItem("token"))


  useEffect(() => {
    async function getTitle() {
      const getJob = await JoblyApi.getJob(id);
      setPage(getJob);
      return getJob;
    }
    getTitle();
  }, []);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
};

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
    <Navigation token={token} handleLogout={handleLogout}/>
    {component}
  </div>;
}

export default JobPage;
