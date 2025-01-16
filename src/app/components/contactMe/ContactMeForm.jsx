import React from "react";
import "./ContactMeForm.css";

const ContactMeForm = () => {
  return (
    <div className="text-center form-wrapper">
      <p className="formHead">Send me a message</p>
      <p className="formDesc">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <div className="d-flex">
        <div className="form-group">
          <label style={{ color: "#86869B" }} for="exampleFormControlInput1">
            Email address
          </label>
          <input
            style={{ backgroundColor: "transparent" }}
            border="0px 0px 1px 0px"
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMeForm;
