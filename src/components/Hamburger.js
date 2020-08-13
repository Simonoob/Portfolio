import React from "react";
import { gsap } from "gsap";

const Hamburger = () => {
  const handleMobileNav = (e) => {
    const sidenav = e.target.nextSibling;

    sidenav.style.left === "0vw"
      ? gsap.to(sidenav, { left: "-40vw" })
      : gsap.to(sidenav, { left: "0vw" });
  };

  return (
    <div className="hamburger" onClick={handleMobileNav}>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  );
};

export default Hamburger;
