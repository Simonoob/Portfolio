import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Background from "../Background";
import { gsap, Power2, TimelineLite } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import PageTransition from "../PageTransition";

gsap.registerPlugin(CSSRulePlugin);

const Home = ({ Mouse }) => {
  let videoContainerAfter = CSSRulePlugin.getRule(
    "body .App .content .video:after"
  );
  let headerAfter = CSSRulePlugin.getRule("body .App .content .home h1:after");
  let link1After = CSSRulePlugin.getRule(
    "body .App .content .home .link-container .link1:after"
  );
  let link1Before = CSSRulePlugin.getRule(
    "body .App .content .home .link-container .link1:before"
  );
  let link2After = CSSRulePlugin.getRule(
    "body .App .content .home .link-container .link2:after"
  );
  let link2Before = CSSRulePlugin.getRule(
    "body .App .content .home .link-container .link2:before"
  );

  // let videoItem = useRef();
  // let header = useRef();
  let link1 = useRef();
  // let link2 = useRef();

  const tl = new TimelineLite({ delay: 0.6 });

  const handleExpand = (e) => {
    if (e.target === link1) {
      gsap.to(link2After, { width: "101%" });
      gsap.to(link1Before, { width: "101%" });
    } else {
      gsap.to(link1After, { width: "101%" });
      gsap.to(link2Before, { width: "101%" });
    }
  };

  const handleShrink = (e) => {
    gsap.to(link1After, { width: "0%" });
    gsap.to(link1Before, { width: "0%" });
    gsap.to(link2After, { width: "0%" });
    gsap.to(link2Before, { width: "0%" });
  };

  const resetPage = () => {
    gsap.to(link2After, { width: "0%" });
    gsap.to(link1Before, { width: "0%" });
    gsap.to(link1After, { width: "0%" });
  };

  useEffect(() => {
    gsap.to(videoContainerAfter, {
      width: "0%",
      duration: 3,
      delay: 1,
      ease: Power2.easeOut,
    });
    tl.to([headerAfter, link1After, link2After], {
      width: "0%",
      ease: Power2.easeInOut,
      duration: 1.4,

      stagger: 0.3,
    }).to([link1After, link2After], { opacity: 0.5 });
  }, [tl, headerAfter, link1After, link2After, videoContainerAfter]);

  return (
    <div>
      <PageTransition />
      <div className="video">
        <Background Mouse={Mouse} />
      </div>
      <div className="home">
        <h1>Welcome</h1>
        <div className="link-container">
          <NavLink
            to="/projects"
            className="link link1"
            ref={(el) => {
              link1 = el;
            }}
            onMouseEnter={handleExpand}
            onMouseLeave={handleShrink}
            onClick={resetPage}
          >
            Check my work
          </NavLink>
          <NavLink
            to="/contact"
            className="link link2"
            onMouseEnter={handleExpand}
            onMouseLeave={handleShrink}
            onClick={resetPage}
          >
            Get in touch
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
