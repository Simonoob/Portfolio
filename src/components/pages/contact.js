import React, { useState } from "react";
import ThankYou from "./ThankYou";

import PageTransition from "../PageTransition";

const Form = ({ operation }) => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return (
    <div className="form-container">
      {/* <form method="post" netlify name="contact" onSubmit={operation}>
        <h2>
          Send me a message{" "}
          <span role="img" aria-label="envelope">
            📡
          </span>
        </h2>
        <div className="input-field">
          <label>
            Name:
            <input type="text" name="name" id="name" required />
          </label>
        </div>

        <div className="input-field">
          <label>
            Email:
            <input type="email" name="email" id="email" required />
          </label>
        </div>

        <div className="input-field ">
          <label>
            Message:
            <textarea
              data-autoresize
              type="text"
              name="message"
              id="textarea"
              required
            ></textarea>
          </label>
        </div>
        <button type="submit">Send</button>
      </form> */}

      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <p>
          <label>
            Your Name:{" "}
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{" "}
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              name="message"
              value={state.message}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

const Contact = () => {
  const [sent, setSent] = useState(false);

  const changeState = () => setSent(!sent);

  return (
    <div className="contact">
      <PageTransition />
      {sent ? <ThankYou /> : <Form operation={changeState} />}
    </div>
  );
};

export default Contact;
