import React from "react";
import "./Home.css";
import Button from "../../CommunComponents/Button";
function TrainingCardType({ img, title, content }) {
  return (
    <div className="body align-items-center justify-content-center text-center img-card">
      <img src={img} alt="training" className="img-fluid" />
      <div className="card-content mx-md-5 px-md-5">
        <h2 className="text-white fw-bolder text-center">{title}</h2>

        <p className="text-white fw-medium text-center">{content}</p>
        <Button
          label="View courses"
          color="white"
          backgroundColor="#00ffee56"
        />
      </div>
    </div>
  );
}

export default TrainingCardType;
