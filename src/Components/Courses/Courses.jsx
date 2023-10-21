import React from "react";
import coursesBG from "../../assets/coursesBG.png";
import "./CoursesStyle.css";
import coursesIcon from "../../assets/iconLines.png";
import CoursesCard from "./CoursesCard";
import course1 from "../../assets/Course1.png";
import course2 from "../../assets/course2.png";
import course3 from "../../assets/course3.png";
import course4 from "../../assets/course4.png";

function Courses() {
  const List = [
    {
      pic: course1,
      title: "Personal training",
      content: `Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. `,
   position:true
   
    },
    {
      pic: course2,
      title: "Group fitness classes",
      content: `Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. `,
      position:false

    },
    {
      pic: course3,
      title: "Strength training",
      content: `Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. `,
      position:true

    },
    {
      pic: course4,
      title: "Body building",
      content: `Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. `,
      position:false

    },
  ];

  return (
    <div>
      {/* -------------  Header ---------- */}
      <div className="courses-header">
        <img
          src={coursesBG}
          alt="courses"
          className="courses-cover-pic img-fluid w-100"
        />
        <div className="courses-header-text text-center text-white">
          <p className="courses-text1">Cheap your body</p>
          <p className="fw-bolder courses-text2">
            OUR <span className="courses-span"> COURSES</span>
          </p>
          <div className="courses-bottom-ligne mx-auto"></div>
        </div>
      </div>
      {/* -------------- title --------------- */}
      <div className="d-flex mx-5 px-5">
        <img
          src={coursesIcon}
          alt="courses-icon"
          className="courses-style-img"
        />
        <p className="courses-title1">WHAT WE OFFER</p>
      </div>
      {/* ------------ cards  ------------- */}
      {List.map((item, index) => {
        return <CoursesCard key={index} data={item} />;
      })}
    </div>
  );
}

export default Courses;
