import React from "react";
import "./HeaderFront.scss";

const HeaderFront = () => {
  return (
    <header className="headerFrontBackground">
      <div className="headerFront">
        <h1 className="logo">Logo</h1>
        <div className="loginLogout">
          <button>Logout</button>
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};
export default HeaderFront;
