import React from "react";
import JoblyApi from "../Api"
import {BrowserRouter, Router, Route, Switch, Redirect} from "react-router-dom"
import Companies from "../Companies/Companies";
import CompanyCard from "../Companies/CompanyCard";
import Jobs from "../Jobs/Jobs";
import JobCard from "../Jobs/JobCard";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Home from "../Home/Home";


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/companies"><Companies/></Route>
                <Route exact path="/companies/:handle"><CompanyCard/></Route>
                <Route exact path="/jobs"><Jobs/></Route>
                <Route exact path="/jobs/:id"><JobCard/></Route>
                <Route exact path="/login"><Login/></Route>
                <Route exact path="/signup"><Signup/></Route>
                <Route exact path="/logout"><Login/></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;