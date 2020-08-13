import React from "react";
import PageTransition from "../PageTransition";

const ThankYou = () => {
  return (
    <div className="thank-you">
      <PageTransition />
      <h1>
        <span>
          Thanks for reaching out!{" "}
          <span role="img" aria-label="huggging face">
            🤗
          </span>
        </span>{" "}
        <span>I will be in touch with you shortly.</span>{" "}
      </h1>
    </div>
  );
};

export default ThankYou;
