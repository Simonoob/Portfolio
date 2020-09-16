import React, { useRef, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./scss/App.scss";
import Sidenav from "./components/Sidenav";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Contact from "./components/pages/contact";

import { gsap } from "gsap";
import { AnimatePresence } from "framer-motion";

function App() {
  let app = useRef();

  const location = useLocation();

  useEffect(() => {
    gsap.to(app, { css: { visibility: "visible" }, duration: 1 });
  }, []);

  let Mouse = { x: 0, y: 0 };

  const _onMouseMove = (e) => {
    Mouse = { x: e.screenX, y: e.screenY };
    localStorage.setItem("cursorX", Mouse.x);
    localStorage.setItem("cursorY", Mouse.y);
  };

  return (
    <div className="App" ref={(el) => (app = el)} onMouseMove={_onMouseMove}>
      <Sidenav className="SideNav" />

      <div className="content">
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Home Mouse={Mouse} />
            </Route>
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
