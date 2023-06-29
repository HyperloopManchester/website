import React from "react";

import Layout from "../components/Layout.jsx";
import StyledParagraph from "../components/StyledParagraph.jsx";
import SlideShow from "../components/SlideShow.jsx";

import { BRONZE, SILVER, GOLD, PLATINUM, getAllSponsors } from "../lib/sponsors.js";

import styles from "./index.module.css";

export async function getStaticProps() {
  return {
    props: {
      sponsors: getAllSponsors(),
    },
  };
}

function SponsorLogo({ name, rank, logoUrl, websiteUrl }) {
  return (
    <img
      src={logoUrl}
      alt={name}
      className="responsive-image"
      style={{ maxWidth: "496px", padding: "1em 4em 1em" }} />
  );
}

export default function Index({ sponsors }) {
  const slideShowDelay = 5;

  const titleSlideSources = [
    "/images/slide-pod-concrete.jpg",
    "/images/slide-pod-country.jpg",
    "/images/slide-pod-tube.jpg",
    "/images/slide-pod.jpg",
    "/images/slide-tube.jpg",
  ];

  const podComponentSources = [
    "/images/outer-shell.jpg",
    "/images/braking-system.jpg",
    "/images/chassis-design.jpg",
  ];

  return (
    <Layout>
       <StyledParagraph id="map" title="">
      </StyledParagraph>
    <div className={`wide-container ${styles.separator}`}>
      Our Sponsors
    </div>
      <div className="row">
        {sponsors.map((sponsor, index) => (
          <a key={index} target="_blank" href={sponsor.websiteUrl} rel="noopener noreferrer">
            {SponsorLogo(sponsor)}
          </a>
        ))}
      </div>

    
      <div className={`wide-container ${styles.separator}`}>
        Become a Partner
      </div>
      <StyledParagraph
        id="become-partner"
        title="Join the Team – Become a Partner"
      >
        <p>
          The Hyperloop concept itself is an innovation pushing the very
          boundaries of transportation technology; therefore, it only makes
          sense that our vision and ideas are of the same magnitude. Our goal is
          to build the fastest pod we can and win the Hyperloop Pod Competition.
          To achieve this, we rely on the valuable contributions from our
          sponsors, who support us in technical, material and financial matters.
        </p>
        <p>
          Are you interested in making the fifth mode of transport a reality
          with us? For more information, contact us at:{" "}
          <a className="text-break" href="mailto:hyperloopmanchester@gmail.com">
            hyperloopmanchester@gmail.com
          </a>{" "}
          and we will get in touch.
        </p>
        <p>
          Please view our Hyperloop Manchester info pack by clicking the button
          below.
        </p>
        <br />
        <div className="text-center">
          <a
            target="_blank"
            href="/sponsor-pack.pdf"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Open Info Pack
          </a>
        </div>
      </StyledParagraph>
    </Layout>
  );
}
