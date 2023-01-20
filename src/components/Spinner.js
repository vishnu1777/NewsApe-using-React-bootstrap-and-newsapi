import React, { Component } from "react";
import Loading from "./loading.gif";
const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={Loading} alt="loading" />
    </div>
  );
};
export default Spinner;
