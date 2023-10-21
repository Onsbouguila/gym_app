import React from "react";
import icon from "../../assets/iconList.png";
function PricingCard(props) {
  let {
    color,
    backgroundColor,
    btnColor,
    price,
    title,
    premium,
    items,
  } = props.data;
  const cardStyle = {
    background:
      premium && `linear-gradient(to left, #014251, ${backgroundColor})`,
    backgroundColor: backgroundColor,
  };
  const priceStyle = {
    color: color,
    fontSize: "3vw",
    fontWeight: "700",
  };
  const btnStyle = {
    backgroundColor: btnColor,
    border: "none",
    color:premium ? color : "white",
    fontWeight:600,
  };
  return (
    <div
      className={`card rounded-5 p-4 ${!premium && "mt-5"} ${
        !premium && "mb-5"
      }`}
      style={cardStyle}
    >
      <div className="container">
        <div className="text-center text-white fw-bolder fs-5">
          <p>{title}</p>
          <p style={priceStyle}>
            $ {price} <span>/M</span>{" "}
          </p>
        </div>
        <ul className="text-white" style={{ listStyleType: "none" }}>
            {items?.map((item,index)=> {
                return <li>
                        <img src={icon} alt="icon" style={{ maxWidth: "26px" }} />
                        {item}
                </li>
            })}
        </ul>

        <button
          className={`d-block mx-auto px-4 py-2 rounded-5 outline-none border-none ${
            premium && "mt-5"
          }`}
          style={btnStyle}
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
