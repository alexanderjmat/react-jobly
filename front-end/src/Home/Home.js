import "./Home.css";
import { React, useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import jwt from "jsonwebtoken";

function Home(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [introComponent, setIntroComponent] = useState(
    <div className="Home__body">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
    </div>
  );
  useEffect(() => {
    console.log(token)
    if (token) {
      const data = jwt.decode(localStorage.getItem("token"));
      setIntroComponent(
        <div className="Home__body">
          <h1>Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
          <h2>Welcome back, {data.username}!</h2>
        </div>
      );
    } else {
      setIntroComponent(
        <div className="Home__body">
          <h1>Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
        </div>
      );
    }
  }, []);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <div className="Home">
      <Navigation token={token} handleLogout={handleLogout} />
      {introComponent}
    </div>
  );
}

export default Home;
