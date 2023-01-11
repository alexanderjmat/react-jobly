import { React, useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

function Home(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  
  return (
    <div className="Home">
      <Navigation token={token} handleLogout={handleLogout} />
    </div>
  );
}

export default Home;
