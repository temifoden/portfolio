import React from "react";
import "./BuildRead.css";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import Image from "next/image";
import UniversalBtn from "../buttons/UniversalBtn";
import { TfiArrowTopRight } from "react-icons/tfi";

const BuildRead = () => {
  return (
    <div className="two-column-section">
      <div className="column column-left">
        <Image
          src="/images/buildlap.svg"
          alt="laptop"
          //   layout="responsive"
          width={48}
          height={48}
          className="hero-image"
        />
        <p
          style={{
            fontWeight: "var(--font-weight-bold)",
            fontSize: "48px",
            lineHeight: "3.3rem",
            letterSpacing: "-0.792px",
            marginTop: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          I build & <br className="d-none d-md-block" />
          Design stuff
        </p>
        <p
          style={{
            fontSize: "1.125rem",
            fontWeight: "var(--font-weight-regular)",
            lineHeight: "27px",
            marginBottom: "3rem",
          }}
        >
          {/* I'm not just crafting layouts or refining stylesheets. I’m engineering
          solutions from pixels to backend processes. Whether it’s designing
          seamless user interfaces or building robust APIs, I thrive in blending
          creativity with logic. My passion lies in delivering experiences that
          are not only beautiful but also scalable, ensuring every line of code
          serves both the user and the system flawlessly. */}
          I design with the entire software development lifecycle in mind,
          combining creativity and problem-solving to build thoughtful, lasting
          solutions. With a background in computer engineering, I enjoy turning
          complex challenges into seamless experiences.
        </p>
        <UniversalBtn type="primary">
          See my work <TfiArrowTopRight className="ms-1" />
        </UniversalBtn>
      </div>
      <div className="column column-right">
        <Image
          src="/images/quillwrite.svg"
          alt="write"
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
