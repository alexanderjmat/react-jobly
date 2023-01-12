import "./CompanyCard.css"
import { React, useState, useEffect } from "react";
import JoblyApi from "../Api";

function CompanyCard(props) {
    return (
        <div className="CompanyCard">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default CompanyCard;