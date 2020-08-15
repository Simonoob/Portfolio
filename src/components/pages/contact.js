import React, { useState } from "react";
import ThankYou from "./ThankYou";

import PageTransition from "../PageTransition";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const Form = () => {
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
        .then(() => setSent(!sent))
        .catch((error) => alert(error));

      e.preventDefault();
    };

    const handleChange = (e) =>
      setState({ ...state, [e.target.name]: e.target.value });

    return (
      <div className="form-container">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <h2>
            Send me a message{" "}
            <span role="img" aria-label="envelope">
              📡
            </span>
          </h2>

          <div className="input-field">
            <label>
              Name:{" "}
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
                id="name"
                required
              />
            </label>
          </div>
          <div className="input-field">
            <label>
              Email:{" "}
              <input
                type="email"
                name="email"
                id="email"
                required
                value={state.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-field">
            <label>
              Message:{" "}
              <textarea
                name="message"
                id="textarea"
                required
                value={state.message}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  };

  return (
    <div className="contact">
      <PageTransition />
      {sent ? <ThankYou /> : <Form />}
    </div>
  );
};

export default Contact;
