import {React, useState} from "react";
import JoblyApi from "../Api";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom"

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const history = useHistory()

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send the user data to the API
    await JoblyApi.login(formData);
    history.push("/");
  };
  return (
    <div className="Login">
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" value={formData.username} type="text" onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input id="password" value={formData.password} type="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
