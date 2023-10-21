import React from "react";

function CoachCard({ img, title, role }) {
  return (
    <div className="container text-center justify-content-center">
      <img src={img} alt="coach" className="img-fluid p-5"/>
      <h2 className="text-white ">{title}</h2>
      <p className="text-white mt-1">{role}</p>
    </div>
  );
}

export default CoachCard;
