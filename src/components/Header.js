import React from "react";
import Sidebar from "./Sidebar";
import "./Header.css";
import logo from "/Users/rahuliyer/Desktop/projects/newsapp/src/images/logo_inshorts (1).png";

const Header = ({ setCategories }) => {
  return (
    <div className="header-container">
      <div className="header-icon">
        <Sidebar setCategories={setCategories} />
      </div>
      <div className="logo-container">
        <img src={logo} alt="inshort app" className="header-logo" />
      </div>
    </div>
  );
};

export default Header;
