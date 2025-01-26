import React from "react";
import "./ContactMeForm.css";

const ContactMeForm = () => {
  return (
    <div className="container-md" style={{}}>
      <div className="mx-auto d-flex justify-content-center ">
        <div className="form-wrapper px-auto">
          <p className="formHead text-center">Send me a message</p>
          <p className="formDesc text-center">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <div className="flex-wrapper d-flex justify-content-between">
            <div className="form-group ">
              <label
                style={{ color: "#86869B" }}
                htmlFor="exampleFormControlInput1"
              >
                Your name
              </label>
              <input
                type="email"
                className="form-input form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group ">
              <label
                style={{ color: "#86869B" }}
                htmlFor="exampleFormControlInput1"
              >
                Email
              </label>
              <input
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "1px solid var(--text-color-neutral-border)",
                  borderRadius: "0px",
                }}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div className="text-area-wrapper">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
              style={{ color: "#86869B" }}
            >
              Example textarea
            </label>
            <textarea
              className="text-area-form form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeForm;
