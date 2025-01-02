import Image from "next/image";
import React from "react";
import "./Hero.css";
import UniversalBtn from "../../buttons/UniversalBtn";
import { TfiArrowTopRight } from "react-icons/tfi";

const Hero = () => {
  return (
    <div>
      <div className="row g-4">
        <div
          className=" col col-12 col-md-6 "
          style={{ fontWeight: "var( --font-weight-bold)" }}
        >
          <div className="hero-title">
            Hi, I’m{" "}
            <span style={{ color: "var(--primary-color)" }}>Temitayo</span>,{" "}
            <br />a Software Engineer
          </div>
          <span
            style={{
              fontSize: "16px",
              border: "1px solid var( --text-color-neutral-border)",
              padding: "8px 16px",
              borderRadius: "36px",
              color: "var(--text-color-neutral)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Sounds like /te-mi-ta-jɔː/
          </span>

          <div
            style={{
              marginTop: "3.18rem",
            }}
          >
            <UniversalBtn style={{ fontWeight: "var(--font-weight-medium)" }}>
              Get in touch <TfiArrowTopRight className="ms-1" />
            </UniversalBtn>
            {/* <UniversalBtn type="primary">Get in touch</UniversalBtn> */}
          </div>

          <div
            className=""
            style={{
              marginTop: "6.75rem",
              fontWeight: "var(--font-weight-regular)",
              fontSize: "14px",
              gap: "4.43rem",
              display: "flex",
            }}
          >
            <p>
              Highly skilled at progressive enhancement, design systems &amp;
              Software Engineering.
            </p>
            <p>
              {/* Demonstrated success in delivering impactful products for clients,
              startups, and established businesses, often collaborating with
              teams when needed to bring these products to life. */}
              Proven success in delivering impactful products for clients,
              startups, and businesses, with collaborative teamwork when
              necessary.
            </p>
          </div>
        </div>
        <div className="col col-12 col-md-6">
          <div className="image-wrapper">
            <Image
              src="/images/act.jpeg"
              alt="Actor Illustration"
              layout="responsive"
              width={500}
              height={500}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
