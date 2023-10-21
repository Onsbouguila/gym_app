import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./headerStyle.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function Header() {
  const [selectedItem, setSelectedItem] = useState("Home");
  return (
    <div className="container-fluid">
      <div className="row p-2 body">
        <div className="col-md-2">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-md-8 d-flex justify-content-end align-items-center">
          <ul
            className="d-flex align-items-center"
            style={{ listStyleType: "none" }}
          >
             <Link
              to="/"
              className={`mx-3 headerItem ${selectedItem === "Home" ? "selected" : ""}`}
              onClick={() => setSelectedItem("Home")}
            >
              Home
            </Link>
            <Link
              className={`mx-3 headerItem ${selectedItem === "About us" ? "selected" : ""}`}
              onClick={() => setSelectedItem("About us")}
              to="/about"
            >
              About us
            </Link>
            <Link
              className={`mx-3 headerItem ${selectedItem === "Pricing" ? "selected" : ""}`}
              onClick={() => setSelectedItem("Pricing")}
              to="/pricing"
            >
              Pricing
            </Link>
            <Link
              className={`mx-3 headerItem ${selectedItem === "Courses" ? "selected" : ""}`}
              onClick={() => setSelectedItem("Courses")} to="/courses"
            >
              Courses
            </Link>
          </ul>
        </div>
        <div className="col-md-2">
          <Button label="Get Started" color="white" backgroundColor="#00FFF0" />
        </div>
      </div>
    </div>
  );
}

export default Header;


