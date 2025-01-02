import React from "react";
import "./BuildRead.css";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import Image from "next/image";

const BuildRead = () => {
  return (
    <div className="two-column-section">
      <div className="column column-left">
        <LiaLaptopCodeSolid
          style={{ height: 48, width: 40, color: "var(--icon-color)" }}
        />
        <p
          style={{
            fontWeight: "var(--font-weight-bold)",
            fontSize: "48px",
            lineHeight: "3.3rem",
            letterSpacing: "-0.792px",
          }}
        >
          I build & <br />
          Design stuff
        </p>
        <p>
          Highly skilled at progressive enhancement, design systems & software
          engineering.
        </p>
      </div>
      <div className="column column-right">
        <Image
          src="/images/quillwrite.svg"
          alt="Actor Illustration"
          //   layout="responsive"
          width={48}
          height={48}
          className="hero-image"
        />
        <h1>I write, sometimes</h1>
        <p>
          Proven success in delivering impactful products for clients, startups,
          and businesses, often collaborating with teams when necessary.
        </p>
      </div>
    </div>
  );
};

export default BuildRead;
