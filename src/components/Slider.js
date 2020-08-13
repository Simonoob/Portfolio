import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3, TimelineLite, gsap } from "gsap";

import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";

import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

const testimonials = [
  {
    title: "GitHub Job finder",
    image: `${require("../assets/job.finder.PNG")}`,
    quote:
      "A React application using the GitHub Jobs API to fetch and filter job posts in real time. The app uses hooks, Axios, and pagination to organize the job posts in batches of 50.",
    linkCode: "https://github.com/Simonoob/gh-job-post",
    linkLive: "https://eloquent-goldstine-61bd2a.netlify.app/",
  },
  {
    title: "Phonebook",
    image: `${require("../assets/phonebook.PNG")}`,
    quote:
      "A back-end focused CRUD  React app using Node.js and a MongDB database. The single-page-app runs on a Node.js server, that serves as a middleware between the front-end and the database. The app also provides a fully functioning RESTful API that can be used independedntly to fetch or post data, without using the front-end.",
    linkCode:
      "https://github.com/Simonoob/-FULL-STACK-WEB-DEVELOPMENT-MOOC-2020-submissions-3.1-",
    linkLive: "http://vast-scrubland-10234.herokuapp.com/",
  },
  {
    title: "Book library",
    image: `${require("../assets/book-library.PNG")}`,
    quote:
      "A CRUD application using realtime databases and user authentication from Firebase. It allows users to add books to a personal space, modify their state and sync data across devices.",
    linkCode: "https://github.com/Simonoob/Book-Library",
    linkLive: "https://simonoob.github.io/Book-Library/",
  },
];

const Slider = () => {
  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  useEffect(() => {
    fadeOut(0, 0);

    TweenLite.to(testimonialList.children[0], 0, {
      opacity: 1,
      pointerEvents: "all",
    });
  }, []);

  //background-animation

  // let bottomRect = CSSRulePlugin.getRule(
  //   "body .App .content .projects .testimonial-section:after"
  // );
  // let topRect = CSSRulePlugin.getRule(
  //   "body .App .content .projects .testimonial-section .testimonial-container .inner:after"
  // );
  // let middleRect = CSSRulePlugin.getRule(
  //   "body .App .content .projects .testimonial-section .testimonial-container .inner:before"
  // );
  // let border = CSSRulePlugin.getRule(
  //   "body .App .content .projects .testimonial-section .testimonial-container .inner .t-image:after"
  // );

  // useEffect(() => {
  //   gsap.from(bottomRect, {
  //     left: "20%",
  //     duration: 7,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: Power0.easeInOut,
  //   });
  //   gsap.from(bottomRect, {
  //     top: "50%",
  //     duration: 13,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: Power0.easeInOut,
  //   });
  //   gsap.from(bottomRect, {
  //     width: "50%",
  //     duration: 18,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: Power0.easeInOut,
  //   });

  //   gsap.to(topRect, {
  //     left: "20%",
  //     duration: 5,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: Power0.easeInOut,
  //   });
  //   gsap.to(topRect, {
  //     height: "100%",
  //     top: "-30%",
  //     duration: 15,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: Power0.easeInOut,
  //   });
  //   gsap.to(middleRect, {
  //     left: "20%",
  //     duration: 5,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: Power0.easeInOut,
  //   });
  //   gsap.to(middleRect, {
  //     top: "-20%",
  //     height: "100%",
  //     duration: 30,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: Power0.easeInOut,
  //   });
  // gsap.to(border, {
  //   left: "30px",
  //   duration: 1,
  //   repeat: -1,
  //   yoyo: true,
  // });
  // gsap.to(border, {
  //   top: "30px",
  //   duration: 1.2,
  //   repeat: -1,
  //   yoyo: true,
  // });
  // // });

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  //Content transition

  const fadeOut = (duration) => {
    TweenLite.to(testimonialList.children, duration, {
      opacity: 0,
      pointerEvents: "none",
    });
  };

  const fadeIn = (index, duration) => {
    const tl = new TimelineLite();

    tl.to(testimonialList.children, 0.1, {
      opacity: 0,
      delay: 1,
    }).to(testimonialList.children[index], duration, {
      opacity: 1,
      pointerEvents: "all",
    });
  };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(1);
      fadeIn(1, 1);
    }
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div onClick={prevSlide} className="arrows left">
          <span>
            <img src={leftArrow} alt="left arrow" />
          </span>
        </div>
        <div className="inner">
          <div className="t-image">
            <ul ref={(el) => (imageList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={testimonials[1].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={testimonials[2].image} alt={testimonials[0].name} />
              </li>
            </ul>
          </div>
          <div className="t-content">
            <ul ref={(el) => (testimonialList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <div className="content-inner">
                  <h2 className="title">{testimonials[0].title}</h2>
                  <p className="quote">{testimonials[0].quote}</p>
                  <a
                    href={testimonials[0].linkCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Code
                  </a>
                  <a
                    href={testimonials[0].linkLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    See it live
                  </a>
                </div>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <div className="content-inner">
                  <h2 className="title">{testimonials[1].title}</h2>
                  <p className="quote">{testimonials[1].quote}</p>
                  <a
                    href={testimonials[1].linkCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Code
                  </a>
                  <a
                    href={testimonials[1].linkLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    See it live
                  </a>
                </div>
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <div className="content-inner">
                  <h2 className="title">{testimonials[2].title}</h2>
                  <p className="quote">{testimonials[2].quote}</p>
                  <a
                    href={testimonials[2].linkCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Code
                  </a>
                  <a
                    href={testimonials[2].linkLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    See it live
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrows right" onClick={nextSlide}>
          <img src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
