import { React, useEffect, useState } from "react";
import JoblyApi from "../Api";
import jwt from "jsonwebtoken";
import jwtDecode from 'jwt-decode';
import { Redirect } from "react-router-dom"

function Signup(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send the user data to the API
    await JoblyApi.signup(formData);
  };

  const [page, setPage] = useState(<form>
    <label htmlFor="username">Username</label>
    <input
      id="username"
      type="text"
      value={formData.username}
      onChange={handleChange}
    />

    <label htmlFor="password">Password</label>
    <input
      id="password"
      type="password"
      value={formData.password}
      onChange={handleChange}
    />

    <label htmlFor="firstname">First Name</label>
    <input
      id="firstName"
      type="text"
      value={formData.firstName}
      onChange={handleChange}
    />

    <label htmlFor="lastname">Last Name</label>
    <input
      id="lastName"
      type="text"
      value={formData.lastName}
      onChange={handleChange}
    />

    <label htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
    />
    <button onClick={handleSubmit}>Submit</button>
  </form>)

useEffect(() => {
    if (localStorage.token) {
        setPage(<Redirect to="/"/>)
    }
  }, [])
console.log(page)

  return (
    <div className="Signup">
      {page}
    </div>
  );
}

export default Signup;
