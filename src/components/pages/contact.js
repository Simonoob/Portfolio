import React, { useState } from "react";
import ThankYou from "./ThankYou";

import PageTransition from "../PageTransition";

const Form = ({ operation }) => {
  return (
    <div className="form-container">
      <form method="post" name="contact" onSubmit={operation}>
        <input type="hidden" name="form-name" value="contact" />
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
