import React from "react";
import backSvg from "../../assets/images/back.svg";

const BackButton = ({ onClick }) => {
  return (
    <img
      src={backSvg}
      className="Back-button"
      alt="back button"
      onClick={onClick}
    />
  );
};

export default BackButton;
