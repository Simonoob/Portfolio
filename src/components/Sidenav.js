import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap, Power2, TimelineLite } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import Hamburger from "./Hamburger";

gsap.registerPlugin(CSSRulePlugin);

const Sidenav = () => {
  let sidenav = useRef();
  let link1 = useRef();
  let link1After = CSSRulePlugin.getRule("body .App .sidenav .link1:after");
  let link2 = useRef();
  let link2After = CSSRulePlugin.getRule("body .App .sidenav .link2:after");
  let link3 = useRef();
  let link3After = CSSRulePlugin.getRule("body .App .sidenav .link3:after");
  let link4 = useRef();
  let link4After = CSSRulePlugin.getRule("body .App .sidenav .link4:after");
  let sidenavAfter = CSSRulePlugin.getRule("body .App .sidenav:after");

  const tl = new TimelineLite({ delay: 0.4 });

  const handleEnter = (e) => {
    if (sidenav.style.left === "0vw") {
      gsap.to(sidenav, { left: "-40vw" });
    }

    switch (e.target) {
      case link1:
        gsap.to(link1After, { height: "102%", duration: 0.25 });
        break;
      case link2:
        gsap.to(link2After, { height: "102%", duration: 0.25 });
        break;
      case link3:
        gsap.to(link3After, { height: "102%", duration: 0.25 });
        break;
      case link4:
        gsap.to(link4After, { height: "102%", duration: 0.25 });
        break;
      default:
        break;
    }
  };

  const handleLeave = (e) => {
    gsap.to([link1After, link2After, link3After, link4After], {
      height: "0%",
      duration: 0.25,
    });
  };

  useEffect(() => {
    tl.to([sidenavAfter], {
      height: "0%",
      ease: Power2.easeInOut,
      stagger: 0.2,
    });
  }, [tl, sidenavAfter]);

  return (
    <div>
      <Hamburger nav={sidenav} />
      <div className="sidenav" ref={(el) => (sidenav = el)}>
        <h1>
          <NavLink to="/" className="block name" onClick={handleEnter}>
            <span>Simone</span>
            <span>Fiorentini</span>
          </NavLink>
        </h1>

        <div className="link-container">
          <NavLink
            className="link link1"
            to="/projects"
            ref={(el) => (link1 = el)}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            Projects
          </NavLink>
          <NavLink
            className="link link2"
            to="/about"
            ref={(el) => (link2 = el)}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            Skills
          </NavLink>
          <NavLink
            className="link link3"
            to="/contact"
            ref={(el) => (link3 = el)}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            Contact
          </NavLink>

          <a
            href="https://drive.google.com/file/d/1TRTq8KBpZ6kZcWgxR0eJSRYAVTyBLSSc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link link4"
            ref={(el) => (link4 = el)}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            Resume
          </a>
        </div>

        <h3 className="block title">
          <span>Web</span>
          <span>Developer</span>
        </h3>
      </div>
    </div>
  );
};

export default Sidenav;
