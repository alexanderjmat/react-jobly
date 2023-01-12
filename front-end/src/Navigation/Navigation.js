import "./Navigation.css";
import { React, useState, useEffect } from "react";
import { Link, Router, useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";

function Navigation(props) {
  const decodedToken = jwt.decode(props.token);
  const history = useHistory();
  const [navigationState, setNavigationState] = useState(
    <div className="Navigation">
      <div className="Navigation__left">
        <Link to="/">
          <h1>Jobly</h1>
        </Link>
      </div>
      <div className="Navigation__right">
        <Link className="Navigation__link" to="/login">
          <h2>Login</h2>
        </Link>
        <Link
          className="Navigation__link"
          style={{ textDecoration: "none" }}
          to="/signup"
        >
          <h2>Signup</h2>
        </Link>
      </div>
    </div>
  );

  useEffect(
    function () {
      if (props.token) {
        setNavigationState(
          <div className="Navigation">
            <div className="Navigation__left">
              <Link to="/">
                <h1>Jobly</h1>
              </Link>
            </div>
            <div className="Navigation__right">
              <Link className="Navigation__link" to="/companies">
                <h2>Companies</h2>
              </Link>
              <Link className="Navigation__link" to="/jobs">
                <h2>Jobs</h2>
              </Link>
              <Link to="/">
                <h2>{decodedToken.username}'s Profile</h2>
              </Link>
              <Link to="/">
                <h2 onClick={props.handleLogout}>Logout</h2>
              </Link>
            </div>
          </div>
        );
      } else {
        setNavigationState(
          <div className="Navigation">
            <div className="Navigation__left">
              <Link to="/"><h1>Jobly</h1></Link>
            </div>
            <div className="Navigation__right">
              <Link to="/login">
                <h2>Login</h2>
              </Link>
              <Link to="/signup">
                <h2>Signup</h2>
              </Link>
            </div>
          </div>
        );
      }
    },
    [props.token]
  );

  return <div className="Navigation">{navigationState}</div>;
}

export default Navigation;
