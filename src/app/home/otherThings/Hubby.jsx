import React from "react";

const Hubby = ({ hubbyText, hubbyIcon: icon }) => {
  return (
    <span
      className="align-items-center me-3"
      style={{
        padding: "16px 32px",
        border: "1px solid var(--text-color-neutral-border)",
        color: "color: var(--bg-color);",
        borderRadius: "36px",
        color: "",
      }}
    >
      {icon && (
        <icon
          className="bg-danger"
          style={{
            marginRight: "12px",
            color: "#86869B",
            width: "24px",
            height: "24px",
          }}
        />
      )}
      <span
        className=""
        style={{
          fontSize: "18px",
          fontWeight: "var(--font-weight-regular)",
          color: "var(--text-color-neutral)",
        }}
      >
        {hubbyText}
      </span>
    </span>
  );
};

export default Hubby;
