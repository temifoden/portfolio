import React from "react";
import styles from "./UniversalBtn.module.css";

const UniversalBtn = ({ type = "default", children, onClick }) => {
  const className = `${styles["universal-btn"]} ${
    type === "primary" ? styles.primary : ""
  }`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default UniversalBtn;
