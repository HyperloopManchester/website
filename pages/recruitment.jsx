import React from 'react';

import Layout from '../components/Layout.jsx';
import StyledParagraph from '../components/StyledParagraph.jsx';

const FORM_URL = 'https://docs.google.com/forms/d/1lNBxbRL5miTCOTDDEnyBGJzS5J-hjGg283K2RNA7hBg';

export default function Recruitment() {
  return (
    <Layout title="Recruitment">
      <StyledParagraph id="about" title="Open Positions">
        Hyperloop Manchester is currently recruiting for the following positions.
        Please apply using the following <a href={FORM_URL}>Google Forms link</a>.
      </StyledParagraph>
      <StyledParagraph id="propulsion" title="Propulsion">
      </StyledParagraph>
      <StyledParagraph id="chassis" title="Chassis / Integration">
      </StyledParagraph>
      <StyledParagraph id="electronics" title="Electronics">
      </StyledParagraph>
      <StyledParagraph id="maglev" title="Maglev">
      </StyledParagraph>
      <StyledParagraph id="shell" title="Outershell">
      </StyledParagraph>
      <StyledParagraph id="emergency-braking" title="Emergency Braking">
      </StyledParagraph>
      <StyledParagraph id="suspension" title="Suspension">
      </StyledParagraph>
      <StyledParagraph id="braking" title="Braking">
      </StyledParagraph>
      <StyledParagraph id="sponsorship" title="Sponsorship">
      </StyledParagraph>
      <StyledParagraph id="marketing" title="Outreach & Marketing">
      </StyledParagraph>
    </Layout>
  );
}
