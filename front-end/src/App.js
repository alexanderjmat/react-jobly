import {React, useState, useEffect} from "react"
import './App.css';
import Navigation from "./Navigation/Navigation";
import JoblyApi from "./Api";
import Routes from "./Routes/Routes";

function App() {
  const [userState, setUserState] = useState()

  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
