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
    "/images/ehw1.JPG",
    "/images/ehw2.JPG",
    "/images/ehw3.JPG",
    "/images/ehw4.JPG",
    "/images/ehw5.JPG",
  ];



  return (
    <Layout>
      <SlideShow
        id="slideshow"
        delay={slideShowDelay}
        sources={titleSlideSources}
        isFixed
        className={styles.slideShow}
      >
        <div
          className="text-center"
          style={{
            backgroundColor: "rgba(0,0,0,.0)",
            width: "100%",
            margin: "6em auto"
          }}> 
          <h3 className="modal-body"style={{ wordBreak: "break-word", fontSize: "2.5em", fontWeight: "bolder", color: "var(--theme-fg-accent)"}}>
            
          </h3>
          EUROPEAN HYPERLOOP WEEK<br></br>
          &#129171;
          <h3 style={{ wordBreak: "break-word", fontSize: "1.25em", fontWeight: "bolder", color: "var(--theme-fg)" }}>
          </h3>
          
          <h3 style={{ wordBreak: "break-word", fontSize: "1.25em", fontWeight: "bolder", color: "var(--theme-fg)" }}>
            
          </h3>
       
        </div>
      </SlideShow>

      <StyledParagraph id="ehw" title="">
        <p>
        Since our inception Hyperloop Manchester has looked to participate in European Hyperloop Week (EHW) - an annual international competition that brings 
          together the Hyperloop community to discuss the technology, feasibility and scalability of the Hyperloop, encouraging innovation in the industry.
        </p>
        <p>
          Despite being a young team, we at Hyperloop Manchester have a history of successes in this competition: becoming an <b>2021 EHW finalist</b> and obtaining a Top 5 place in <b>Best Levitation Design</b> the same year.
        </p>
      </StyledParagraph>

      <StyledParagraph id="ehw" title="EHW 2023">
      <p>
          Please view our Full-Scale Technical Integration Report by clicking the button
          below.
        </p>
        
        <div className="text-center">
          <a
            target="_blank"
            href="/full-scale-report-2023.pdf"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Full-Scale Submission 2023
          </a>
        </div>
      </StyledParagraph>

    </Layout>
  );
}
