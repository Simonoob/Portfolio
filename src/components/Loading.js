import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="inner">
        <Loader
          type="MutatingDots"
          color="white"
          secondaryColor="white"
          width={100}
        />
        <h1>Getting ready </h1>
      </div>
    </div>
  );
};

export default Loading;
