import React from "react";
import home from "../../assets/HomeBackground.png";
import "./Home.css";
import TrainingCardType from "./TrainingCardType";
import trainingSingle from "../../assets/singleTrain.png";
import group from "../../assets/Group.png";
import coach1 from "../../assets/coach1.png";
import coach2 from "../../assets/coach2.png";
import coach3 from "../../assets/coach3.png";
import register from "../../assets/register.png";
import email from "../../assets/email.png";

import CoachCard from "./CoachCard";
import Button from "../../CommunComponents/Button";

function Home() {
  const content1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, esse. Veniam magnam repellat inventore maiores.";
  const content2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, esse. Veniam magnam repellat inventore maiores.";

  return (
    <div className="body">
      <div style={{ position: "relative" }}>
        <img
          src={home}
          alt="home"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "90vh",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
          className="text-container"
        >
          <h2 className="text-white text-start">Cheap your body</h2>
          <p className="text-white text-start header-title">
            BE <span style={{ color: "#00FFF0" }}>STRONG</span>{" "}
          </p>
          <h1 className="text-white text-start header-second-title">
            TRAIN HARD
          </h1>
        </div>
      </div>
      <div className="row justify-content-center text-center text-white mt-3">
        <h4>WHY CHOSE US?</h4>
        <div className="horizontal-ligne"></div>
        <h3 className="fw-bolder text-white">PUSH YOUR LIMITS FORWARD</h3>
      </div>
      <div className="row px-5 mx-2">
        <div className="col-lg-6">
          <TrainingCardType
            img={trainingSingle}
            title="Personal Training"
            content={content1}
          />
        </div>
        <div className="col-lg-6 p-5">
          <TrainingCardType
            img={group}
            title="Group Training"
            content={content1}
          />
        </div>{" "}
      </div>
      <div className="row text-center">
        <h1 className="header-second-title">OUR TEAM</h1>
        <h3 className="text-white fw-bolder">MEET WITH TRAINERS</h3>
      </div>
      {/* ------------- Coach cards ------------- */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CoachCard
              title="Andrew Letech"
              role="Personal trainer"
              img={coach1}
            />
          </div>
          <div className="col-md-4">
            <CoachCard
              title="Locien Lorun"
              role="Personal trainer"
              img={coach2}
            />
          </div>
          <div className="col-md-4">
            <CoachCard
              title="Andrew Letech"
              role="Personal trainer"
              img={coach3}
            />
          </div>
        </div>
      </div>
      {/* Register card */}
      <div className="container">
        <div>
          <img
            src={register}
            alt="register"
            style={{
              objectFit: "cover",
              width: "100%",
              maxHeight: "70vh",
            }}
          />
        </div>
        <div className="text-container text-center">
          <h3 className="text-white text-center">
            REGISTRATION NOW TO GET MORE DEALS
          </h3>
          <h4 className="text-white text-center">
            WHERE HEALTH, BEAUTY AND FITNESS MEET.
          </h4>
          <Button
            label="Get appointement"
            color="white"
            backgroundColor="#00ffee56"
          />
        </div>
      </div>
      {/* NewsLetter card */}
      <br />
      <div className="new-letter-card p-5 mt-5">
        <h2 className="text-white fw-bolder text-center">
          Join our news letter
        </h2>
        <h6 className="text-white text-center ">
          Le lorem ipsum est, en imprimerie, une suite de mots sans
          signification utilisée à titre provisoire pour calibrer une mise en
          page, <br />
          le texte définitif venant remplacer le faux-texte
        </h6>
        <div className="text-center input-container">
          <img src={email} alt="email" className="input-icon" />
          <input
            type="text"
            className="input-news-letter"
            placeholder="Enter your email address"
          ></input>
          <button className="btn-news-letter fw-bolder text-white">GET STARTED </button>
        </div>
      </div>
      <br /> <br />
    </div>
  );
}

export default Home;
