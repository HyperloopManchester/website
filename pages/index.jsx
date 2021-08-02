import getSponsors from '../lib/sponsors.js';

import StyledParagraph from '../components/styledParagraph.jsx';
import Layout from '../components/Layout.jsx';
import SlideShow from '../components/SlideShow.jsx';

import styles from "./index.module.css";
import { useState } from 'react';

export async function getStaticProps() {
  return {
    props: {
      sponsors: getSponsors()
    },
  }
}

export default function Index({ sponsors }) {
  const slideShowDelay = 5;
  const titleSlideSources = [
    "/images/slide-pod-concrete.jpg",
    "/images/slide-pod-country.jpg",
    "/images/slide-pod-tube.jpg",
    "/images/slide-pod.jpg",
    "/images/slide-tube.jpg"
  ];
  const podComponentSources = [
    "/images/outer-shell.jpg",
    "/images/braking-system.jpg",
    "/images/chassis-design.jpg"
  ];

  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  return (
    <Layout>
      <SlideShow id="slideshow" delay={slideShowDelay} sources={titleSlideSources} className={styles.slideShow}/>

      <StyledParagraph id="about" title="Who are we?">
        <p> Hyperloop Manchester is a student-led Hyperloop project organization aiming to compete in the Hyperloop competitions organized by SpaceX or other organisations and to share our knowledge with people around the world. </p>
        <p> The team is founded in 2019. Now, Hyperloop Manchester has around 70 team members and around 50 alumni members from different nationalities and backgrounds. Furthermore, the team consists of three main divisions and eight subdivisions. </p>
        <img src="/images/team.jpg" className="responsive-image"/>
      </StyledParagraph>

      <StyledParagraph id="about-hyperloop" title="What is Hyperloop?">
        <p> Hyperloop is a proposed high-speed transportation system in which specialised pods are accelerated through a low-pressure tube to achieve high speeds. The system is intended to provide a more cost-effective and faster mode of travel between cities separated by distances less than approximately nine hundred miles. </p>
        <p> The Hyperloop pod which is currently being designed by Hyperloop Manchester team is Hyperman I. </p>
        <img src="/images/pod-image-side-angle-view.png" className="responsive-image"/>
      </StyledParagraph>

      <StyledParagraph id="innovation" title="We always work and inovate">
        <SlideShow delay={slideShowDelay} sources={podComponentSources} className={styles.componentSlideShow}/>
      </StyledParagraph>

      <StyledParagraph id="map" title="Map of the revolution">
        <img src="/images/map.jpg" className="responsive-image"/>
      </StyledParagraph>

      <div className={`wide-container ${styles.separator}`}>Our sponsors</div>

      <div className="row">
        {
          sponsors.map(({name, rank, logoUrl, url}, index) => {
            return (
              <a target="_blank" href={url} rel="noopener noreferrer">
                <img src={logoUrl} alt={name} style={{margin: "1em", margin: "1em 4em 1em"}}/>
              </a>
            );
          })
        }
      </div>

      <div className={`wide-container ${styles.separator}`}>Become a partner</div>

      <StyledParagraph id="become-partner" title="Join the Team – Become a Partner">
        <p> The Hyperloop concept itself is an innovation pushing the very boundaries of transportation technology; therefore, it only makes sense that our vision and ideas are of the same magnitude. Our goal is to build the fastest pod we can and win the Hyperloop Pod Competition. To achieve this, we rely on the valuable contributions from our sponsors, who support us in technical, material and financial matters. </p>
        <p> Are you interested in making the fifth mode of transport a reality with us? For more information, contact us at: <a href="mailto:hyperloopmanchester@gmail.com"> hyperloopmanchester@gmail.com </a> or send us your details and we will get in touch. </p>
        <p> Please view our Hyperloop Manchester info pack by clicking the button below. </p>
        <br/>
        <div className="text-center">
          <a target="_blank" href="/sponsor-pack.pdf" rel="noopener noreferrer" className={styles.button}> 
            Open Info Pack 
          </a>
        </div>
      </StyledParagraph>

      <StyledParagraph>
        <form>
          <input type="text" 
               required
               placeholder="Company name" 
               value={companyName}
               onChange={(e) => setCompanyName(e.target.value)}
               className={styles.inputText}
               />
          <br/>
          <input type="text" 
                 required
                 placeholder="Name" 
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 className={styles.inputText}
                 />
          <br/>
          <input type="text" 
                 required
                 placeholder="E-mail Address" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className={styles.inputText}
                 />
          <br/>
          <input type="text" 
                 required
                 placeholder="Contact number" 
                 value={contactNumber}
                 onChange={(e) => setContactNumber(e.target.value)}
                 className={styles.inputText}
                 />
          <br/>
          <div className="text-center">
            <input type="submit"
                  value="Submit"
                  className={styles.button}
                  />
          </div>
        </form>
      </StyledParagraph>

    </Layout>
  );
}
