import React from "react";
import about from "../../assets/about.png";
import "./about.css";
import coursesIcon from "../../assets/iconLines.png";
import circle from "../../assets/about-circle.png";
import eq1 from "../../assets/eq1.png";
import eq2 from "../../assets/eq2.png";
import eq3 from "../../assets/eq3.png";
import eq4 from "../../assets/eq4.png";
import Equipement from "./equipement";
import coach1 from "../../assets/coach1.png";
import coach2 from "../../assets/coach2.png";
import coach3 from "../../assets/coach3.png";
import registerPic from "../../assets/registerPic.png";
import Button from "../../CommunComponents/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  const EquipementList = [
    {
      title: "Modern equipment",
      content:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification...",
      img: eq1,
    },
    {
      title: "Healthy nutrition plan",
      content:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification...",
      img: eq2,
    },
    {
      title: "Proffsional training plan",
      content:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification...",
      img: eq3,
    },
    {
      title: "Unique to your needs",
      content:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification...",
      img: eq4,
    },
  ];
  return (
    <div>
      {/* ------------- Hedear ---------- */}
      <div className="cover-container">
        <img src={about} alt="cover" className="cover-about" />
        <div className="text-white fw-bolder cover-text text-center">
          <p className="cover-title1">Cheap your body</p>
          <p className="cover-title2">
            ABOUT <span style={{ color: "#00FFF0" }}> US </span>
          </p>
          <div className="horizontal-ligne-about"></div>
          <img
            src={coursesIcon}
            alt="img"
            className="about-lignes-pic img-fluid"
          />
        </div>
      </div>
      {/* -----------Content --------------- */}
      <div className="py-5">
        <div className="text-center text-white fw-bolder mt-5">
          <p className="cover-title1 mt-5">WHY CHOOSE US?</p>
          <div className="horizontal-ligne-about2"></div>
          <p className="cover-title1">PUSH YOUR LIMITS FORWARD</p>
        </div>

        <div className="row my-5 py-5">
          <div className="col-6 px-5 cover-container">
            <img src={circle} alt="circle" className="img-about" />
            <div className="card-content-text-absolute mt-5">
              <h2 className="text-start fw-bolder text-white px-3 ">
                Why to choose us ?{" "}
              </h2>
              <p className="text-white px-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores, officiis architecto laborum eos repellat voluptates?
                Perferendis eaque expedita nisi temporibus, impedit,e?
              </p>
              <button className="btn-about ms-2"> Get started</button>
            </div>
          </div>

          <div className="col-6">
            <div className="row">
              {EquipementList.map((item, index) => (
                <div key={index} className="col-6">
                  <Equipement
                    data={{
                      title: item?.title,
                      content: item?.content,
                      img: item?.img,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/*  ---------------- row 3 -----------------  */}
          <div className="row mt-5">
            <div className="col-6 text-center mt-5">
              <img src={registerPic} alt="register" />
            </div>
            <div className=" col-6 text-white mt-5 pt-5 px-5">
              <h2>Make your selft stronger than your excuses </h2>
              <h4>You’re stronger than you think ! </h4>
              <p className="mt-3 mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia beatae libero nostrum deserunt blanditiis sapiente.
                Quibusdam assumenda, laudantium veniam odio ad repellendus quis
                nam in et earum, amet eligendi est accusamus at eius expedita
                atque beatae voluptatum porro consequatur. Architecto. ...
              </p>
              <Button
                label="Get appointement"
                color="white"
                backgroundColor="#00ffee56"
              />
            </div>
          </div>
          {/* ----------- row 4 --------- */}

          <div className="text-center text-white mt-5">
            <p className="row3-text-about">TESTIMONIAL</p>
            <div className="horizontal-ligne-about3 "></div>
            <h3>OUR CILENT SAY</h3>
          </div>

          {/* --------- row 5 -------------- */}

          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-50" src={coach1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-50" src={coach2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-50" src={coach3} alt="Third slide" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>

        </div>
      </div>
    </div>
  );
}

export default About;
