import React from "react";

function Button({ label, color, backgroundColor }) {
  const buttonStyle = {
    color: color,
    background: `linear-gradient(to top, #014251, ${backgroundColor})`,
    borderRadius:"8px",
    paddingTop:"10px",
    paddingBottom:"10px",
    paddingLeft:"20px",
    paddingRight:"20px",
    fontWeight:"600",
    border:"none"
  };
  return (
    <div>
      <button style={buttonStyle}>{label}</button>
    </div>
  );
}

export default Button;
