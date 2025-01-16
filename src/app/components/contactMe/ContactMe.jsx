import React from "react";
import ContactMeForm from "./ContactMeForm";

const ContactMeFooter = () => {
  return (
    <div
      style={{
        height: "300px",
        paddingTop: "96px",
        paddingBottom: "96px",
        backgroundColor: "var(--text-color)",
        color: "var(--text-color)",
      }}
    >
      <ContactMeForm />
    </div>
  );
};

export default ContactMeFooter;
