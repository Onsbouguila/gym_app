import React from "react";
import "./CoursesStyle.css"
function CoursesCard(props) {
  let { title, position, content, pic } = props.data;
  return (
    <div className="container">
      <div className="row ">
        
        {/* ---------------- col 1 ---------------  */}
        <div className={`col-12 col-md-6 ${position ? 'order-md-2' : 'order-md-1'}`}>
          <div className="d-flex px-5">
            <div className="courses-bottom-ligne my-auto mx-3 pt-3 " style={{width:"30%"}}></div>
            <h2 className="text-white align-items-center ">{title}</h2>
          </div>
          <div className="text-center">
          <img src={pic} alt="course1" className="img-fluid" />
          </div>
        </div>
        {/* ------------------ col 2 ----------------- */}
        <div className={`col-12 col-md-6  d-flex align-items-center px-5 ${position ? 'order-md-1' : 'order-md-2'}`}>
            <p className="text-white">
            {content}
            </p>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;
