import React from "react";
import "./HeaderFront.scss";
import { Link } from "react-router-dom";

const HeaderFront = () => {
  return (
    <header className="headerFrontBackground">
      <div className="headerFront">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1 className="logo">Logo</h1>
        </Link>

        <div className="loginLogout">
          <button>Logout</button>
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};
export default HeaderFront;
