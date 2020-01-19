import React from "react";
import loader from "../../assets/images/loader.gif";

const Loader = () => {
  return (
    <div className="Loader">
      <img src={loader} alt="loading" />
    </div>
  );
};

export default Loader;
