import React from "react";

import PageTransition from "../PageTransition";

const contact = () => {
  return (
    <div className="contact">
      <PageTransition />

      <div className="form-container">
        <form action="/thank-you" data-netlify="true">
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
          <button
            type="submit"
            className="btn btn-large waves-effect waves-light center-align tilt"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
