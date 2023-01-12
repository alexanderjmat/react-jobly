import "./JobCard.css"
import { React, useState, useEffect } from "react";
import JoblyApi from "../Api";

function JobCard(props) {
    return (
        <div className="CompanyCard">
            <h2>{props.title}</h2>
            <p>{props.company}</p>
            <p>Salary: {props.salary}</p>
            <p>Equity: {props.equity}</p>
        </div>
    )
}

export default JobCard;