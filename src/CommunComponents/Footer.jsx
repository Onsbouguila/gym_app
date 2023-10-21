import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./headerStyle.css";
import fb from "../assets/fb.png";
import insta from "../assets/Insta.png";
import youtube from "../assets/youtube.png";

function Footer() {
  const [selectedItem, setSelectedItem] = useState("Home");
  return (
    <div className="container-fluid ">
      <div className="row px-5 p-2 body ">
        <div className="col-md-3 d-flex">
          <div className="align-items-start">
            <img src={logo} alt="logo" />
            <p className="text-white text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              asperiores ea unde facilis eius rerum architecto soluta a
              quibusdam eaque!
            </p>
          </div>
        </div>
        <div className="col-md-2 align-items-start">
          <ul style={{ listStyleType: "none" }}>
            <li className="fw-bolder text-white text-start">Useful links</li>
            <li
              className={`footerItem py-1 ${
                selectedItem === "Home" ? "selected" : "text-white"
              }`}
              onClick={() => setSelectedItem("Home")}
            >
              Home
            </li>
            <li
              className={` text-start footerItem py-1 ${
                selectedItem === "About" ? "selected" : "text-white"
              }`}
              onClick={() => setSelectedItem("About")}
            >
              About us
            </li>
            <li
              className={` text-start footerItem py-1 ${
                selectedItem === "Pricing" ? "selected" : "text-white"
              }`}
              onClick={() => setSelectedItem("Pricing")}
            >
              Pricing
            </li>
            <li
              className={`footerItem py-1 ${
                selectedItem === "Courses" ? "selected" : "text-white"
              }`}
              onClick={() => setSelectedItem("Courses")}
            >
              Courses
            </li>
          </ul>
        </div>
        <div className="col-md-3 align-items-start">
          <ul style={{ listStyleType: "none" }}>
            <li className="fw-bolder text-white text-start">Contact us</li>
            <li className="text-white text-start py-1">
              <span className="footer-item">Address</span> : Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Deserunt, sunt.
            </li>{" "}
            <li className="text-white text-start py-1">
              <span className="footer-item">Phone</span> : +216 99 999 99
            </li>{" "}
            <li className="text-white text-start py-1">
              <span className="footer-item">Email</span>: contact@gmail.com
            </li>{" "}
          </ul>
        </div>

        {/* NewLetter colonne */}
        <div className="col-md-3">
          <p className="fw-bolder text-white text-start">Newsletter</p>
          <p className="text-white text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            eveniet!
          </p>
          <div className="position-relative">
            <input
              type="text"
              placeholder="Email address"
              className="input-contact container-lg"
            />
            <button
              className="btn btn-primary position-absolute top-2"
              style={{
                left: "81%",
                padding: "9px",
                borderRadius: "20px",
                transform: "translateX(-50%)",
                width: "130px",
                border: "none",
                background: `linear-gradient(to top, #014251, ${"#00FFF0"})`,
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="row body align-items-center justify-content-center">
        <div className="col-10 text-center text-white">Extra GYM ©2023</div>
        <div className="col-2 text-end text-white py-3">
          Suivez nous : <img src={fb} alt="fb" /> <img src={insta} alt="insta" />{" "}
          <img src={youtube} alt="youtube" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
