import {React, useEffect, useState} from "react";
import JoblyApi from "../Api"
import { Link } from "react-router-dom"
import Home from "../Home/Home";

function Companies() {
    const [companies, setCompanies] = useState([])
    
    useEffect(() => {
        async function data() {
            const companyList = await JoblyApi.getCompanies()
            setCompanies(companyList)
            return companyList
        }
        data()
    }, [])

    return (
        <div className="Companies">
            <Home/>
            <ul>
                {companies.map(company => {
                    return <Link to={`/companies/${company.handle}`}><li>{company.name}</li></Link>
                })}
                
            </ul>
        </div>
    )
}

export default Companies;
