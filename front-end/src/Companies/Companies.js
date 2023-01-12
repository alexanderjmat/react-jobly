import "./Companies.css";
import { React, useEffect, useState } from "react";
import JoblyApi from "../Api";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import CompanyCard from "./CompanyCard";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [noResults, setNoResults] = useState();
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleQuery(e) {
    const query = search;
    setCompanies(
      companies.filter((company) => {
        for (let value in company) {
          console.log(query, company[value])  
          if (company[value] == query) {
            return company;
          }
        }
      })
    );
    console.log(companies.length)
  }

  useEffect(() => {
    async function data() {
      const companyList = await JoblyApi.getCompanies();
      setCompanies(companyList);
    }
    data();
  }, []);

  console.log(companies.length)

  return (
    <div className="Companies">
      <Navigation handleLogout={handleLogout} token={token} />
      <div className="Companies__search">
        <input
          onChange={handleSearch}
          value={search}
          placeholder="Enter search term.."
        />
        <button onClick={handleQuery}>Submit</button>
      </div>
      <ul>
        {companies.map((company) => {
          return (
            <Link to={`/companies/${company.handle}`}>
              <CompanyCard
                name={company.name}
                description={company.description}
              />
            </Link>
          );
        })}
      </ul>
      {noResults}
    </div>
  );
}

export default Companies;
