import React from "react";
import "./SectionHead.css";

const SectionHead = ({ secHead1, secHead2, secDesc }) => {
  return (
    <>
      <p className="secHead1">{secHead1}</p>
      <p className="secHead2">{secHead2}</p>
      {secDesc && <p className="secDesc">{secDesc}</p>}
    </>
  );
};

export default SectionHead;
