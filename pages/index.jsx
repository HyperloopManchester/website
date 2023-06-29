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
          HYPERLOOP MANCHESTER <br></br>
          &#129171;
          <h3 style={{ wordBreak: "break-word", fontSize: "1.25em", fontWeight: "bolder", color: "var(--theme-fg)" }}>
          </h3>
          
          <h3 style={{ wordBreak: "break-word", fontSize: "1.25em", fontWeight: "bolder", color: "var(--theme-fg)" }}>
            
          </h3>
          {/*
          <h3 style={{ wordBreak: "break-word", fontSize: "1.5em", fontWeight: "bolder", color: "var(--theme-fg-accent)" }}>
            THE STUDENT-LED TRANSPORT REVOLUTION
          </h3>
          <h3 style={{ wordBreak: "break-word", fontSize: "1.5em", fontWeight: "bolder", color: "var(--theme-fg)" }}>
            EHW 2021 Finalist
          </h3>
          <h3 style={{ wordBreak: "break-word", fontSize: "1.5em", fontWeight: "bolder", color: "var(--theme-fg)" }}>
            Top 5 in Best Levitation Design in EHW 2021
          </h3>
          {/*
          <h3 style={{ wordBreak: "break-word", fontSize: "1.5em", fontWeight: "bolder", color: "var(--theme-bg)" }}>
            Founding team of Hyperloop UK
          </h3>
          */}
        </div>
      </SlideShow>

      <StyledParagraph id="about" title="WHO ARE WE?">
        <p>
          Hyperloop Manchester is a student-led Hyperloop project organization
          aiming to compete in the Hyperloop competitions organized by SpaceX or
          other organisations and to share our knowledge with people around the
          world.
        </p>
        <p>
          The team is founded in 2019. Now, Hyperloop Manchester has around 70
          team members and around 50 alumni members from different nationalities
          and backgrounds. Furthermore, the team consists of three main
          divisions and eight subdivisions.
        </p>
        <img src="/images/team2022.jpg" className="responsive-image" />
      </StyledParagraph>

      <StyledParagraph id="about-hyperloop" title="WHAT IS HYPERLOOP?">
        <p>
          Hyperloop is a proposed high-speed transportation system in which
          specialised pods are accelerated through a low-pressure tube to
          achieve high speeds. The system is intended to provide a more
          cost-effective and faster mode of travel between cities separated by
          distances less than approximately nine hundred miles.
        </p>
        <p>
          The Hyperloop pod which is currently being designed by Hyperloop
          Manchester team is Hyperman I.
        </p>
        <img
          src="/images/pod-image-side-angle-view.png"
          className="responsive-image"
        />
      </StyledParagraph>

      <StyledParagraph id="map" title="MAP OF THE REVOLUTION">
        <img src="/images/map.jpg" className="responsive-image" />
      </StyledParagraph>

      <StyledParagraph id="innovation" title="INNOVATION STARTS HERE">
        <SlideShow
          delay={slideShowDelay}
          sources={podComponentSources}
          className={styles.componentSlideShow}
        />
        </StyledParagraph>

    </Layout>
  );
}
