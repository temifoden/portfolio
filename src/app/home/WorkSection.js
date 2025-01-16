import React from "react";
import SectionHead from "../components/secHead/SectionHead";
import UniversalBtn from "../components/buttons/UniversalBtn";
import { TfiArrowTopRight } from "react-icons/tfi";

const WorkSection = () => {
  return (
    <div className="container-md">
      <SectionHead
        secHead1="WORK"
        secHead2="Selected projects"
        secDesc=" From product based teams and startups I’ve worked with"
      />

      <div className="row gx-3 gy-3 workSlide ">
        <div
          className="col col-12 col-6"
          style={{
            border: "1px solid #aaaadd",
            borderRadius: "24px",
            height: "401px",
            // width: "503px",
          }}
        ></div>
        {/* <div
          className="col col-12 col-6"
          style={{
            border: "1px solid #aaaadd",
            borderRadius: "24px",
            height: "401px",
            // width: "503px",
          }}
        ></div>
        <div
          className="col col-12 col-6"
          style={{
            border: "1px solid #aaaadd",
            borderRadius: "24px",
            height: "401px",
            // width: "503px",
          }}
        ></div> */}
      </div>
      <div className="text-center" style={{ marginTop: "3.785rem" }}>
        <UniversalBtn>
          See my works <TfiArrowTopRight className="ms-1" />
        </UniversalBtn>
      </div>
    </div>
  );
};

export default WorkSection;
