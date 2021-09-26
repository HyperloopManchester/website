import React from "react";

import Layout from "../components/Layout.jsx";
import StyledParagraph from "../components/StyledParagraph.jsx";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdDQfLnVfx91fpMfkjpVKcy5QD1Mns6CE6zFl9ZNSvrPsuaLQ/viewform";

export default function Recruitment() {
  return (
    <Layout title="Recruitment">
      <StyledParagraph id="about" title="About Us">
        Hyperloop Manchester is currently recruiting for the following
        positions. Please apply using the following{" "}
        <a href={FORM_URL}>Google Forms link</a>.
      </StyledParagraph>
      <StyledParagraph id="propulsion" title="Propulsion">
        Responsible for managing the propulsion subsystem which consists of a
        Linear Induction Motor (LIM) as means of propulsion. Sample activities
        performed within the team are running simulations to output the power
        requirement of the motor; find the overall electromagnetic force of the
        system; thrust estimation and CAD design of the components from the
        propulsion system.
        <br />
        Preferred Skills:
        <ul>
          <li>MATLAB</li>
          <li>ANSYS Maxwell or equivalent software (e.g. COMSOL Multiphysics)</li>
          <li>Yr 2/3 from EEE</li>
        </ul>
      </StyledParagraph>
      <StyledParagraph id="chassis" title="Chassis / Integration">
        Responsible for the chassis, jig design, and the integration of all
        subsystems (braking, magnetic levitation, suspension, emergency braking,
        outer shell, and electronics). We will work with softwares such as
        Solidworks and Ansys to optimize our design. Once ready, we will get
        into the workshop for some hands-on work. This will involve a lot of
        metalwork and collaborating with all the other sub-teams to integrate
        everything successfully.
        <br />
        Preferred Skills:
        <ul>
          <li>ANSYS simulation software or equivalent</li>
          <li>CAD (SolidWorks is preferred)</li>
          <li>Knowledge of general mechanical / dynamic elements (castings, gearboxes, bearings, etc.)</li>
        </ul>
      </StyledParagraph>
      <StyledParagraph id="electronics" title="Electronics">
        The electronics team is responsible for the development of all
        electronic systems contained onboard. This includes PCB design and
        manufacturing, selection of electrical hardware, and system-level
        design. Furthermore, the electronics team works closely with both the
        mechanical and software teams, and plays an essential role in the
        controls, navigation, and sensing required for a fully-functional
        Hyperloop pod.
        <br />
        Preferred Skills:
        <ul>
          <li>PCB Design</li>
          <li>CAD</li>
          <li>MATLAB</li>
        </ul>
      </StyledParagraph>
      <StyledParagraph id="maglev" title="Maglev">
        The maglev team is an essential part to the hyperloop pod. We are
        looking for students who are passionate about the concept and fast
        learners when it comes to software. There will be lots of research on
        the feasibility of air bearings and potentially switching to it, market
        research for permanent magnets as well as a dual Halback array system.
        We will be using COMSOL to model the current design and run simulations
        (eg. ride height, interaction with the braking system, small amount of
        magnetic drag). You will be exposed to an interdisciplinary team where
        engineers, physicists and business students all work towards a common
        goal.
        <br />
        Preferred Skills:
        <ul>
          <li>MATLAB</li>
          <li>CAD (SolidWorks is preferred)</li>
          <li>Experience with simulation software</li>
        </ul>
      </StyledParagraph>
      <StyledParagraph id="shell" title="Outershell">
        Responsible for the bodywork (in this case an aerodynamic shell).
        Includes extensive work with Computational Fluid Dynamics (CFD) using
        softwares such as ANSYS. Other parts of the design process include but
        are not limited to Composite material simulations utilising FEM.
        <br />
        Preferred Skills:
        <ul>
          <li>CFD (ASNSYS, Siemens)</li>
          <li>CAD (Solidworks)</li>
          <li>Wind tunnel testing experience</li>
          <li>Composite manufacturing experience</li>
        </ul>
      </StyledParagraph>
      <StyledParagraph id="emergency-braking" title="Emergency Braking">
        Responsible for the complete design, simulation, manufacturing and
        finally testing of the emergency braking system of the pod. You will
        work with softwares such as Solidworks, Ansys, Matlab to optimise the
        design as well as in the workshop with power tools in the final
        manufacturing stage. The effort will include constant communication with
        other sub teams to ensure the correct and homogeneous progress of the
        team as a whole.
        <br />
        Preferred Skills:
        <ul>
          <li>ANSYS</li>
          <li>MATLAB</li>
          <li>Solidworks</li>
        </ul>
      </StyledParagraph>
      <StyledParagraph id="suspension" title="Suspension">
        Responsible for the suspension system design. Specifically, take-off
        suspension, which handles vertical vibrations, landing and pitch, and is
        necessary for ride-height adjustability. As well as, guide-wheel + LCM
        suspension, which handles lateral vibrations, body roll and yaw. This
        includes CAD modelling, improving on existing design concepts, FEA,
        building a vibration model, simulating the vibrations, fine-tuning the
        system in terms of stiffness and damping coefficient, research, etc.
        <br />
        Preferred Skills:
        <ul>
          <li>FEA Analysis (ANSYS, SolidWorks, Abaqus, etc.)</li>
          <li>CAD (SolidWorks)</li>
          <li>MATLAB</li>
          <li>Understanding and experience in numerical modelling</li>
        </ul>
      </StyledParagraph>
      <StyledParagraph id="braking" title="Braking">
        Responsible for making eddy current brakes for the pod. Simulation runs
        and structural improvements need to be made to the current design. Role
        will include CAD modelling for the mechanical structure, FEA of braking
        forces on the brakes, magnetic simulations using softwares such as ANSYS
        Maxwell or COMSOL, research, etc.
        <br />
        Preferred Skills:
        <ul>
          <li>MATLAB</li>
          <li>CAD (SolidWorks)</li>
          <li>ANSYS Maxwell</li>
        </ul>
      </StyledParagraph>
      <StyledParagraph id="sponsorship" title="Sponsorship">
        I need an aggressor who will hunt down target sponsor companies for
        money, software, and a legal logo. I need them to be able to contact
        them directly in the UK as I will not be in the UK for 2022. Important:
        Takes initiative, coordinates and cooperates well with others, and will
        not stop at rejection. Good time management and planning for a smooth
        and easy workflow after the initial phase, so if you are someone who
        works hard to enjoy future fruits of his/her labour, apply!!
        <br />
        Preferred Skills:
        <ul>
          <li>Interest in the Hyperloop concept</li>
          <li>Able to contact sponsors located in the UK</li>
        </ul>
      </StyledParagraph>
      <StyledParagraph id="marketing" title="Outreach & Marketing">
        Outreach has two main areas of focus: helping current university
        students to grow, and engaging young people in STEM. Outreach organises
        an array of events, from workshops for current university students to
        develop their skills, to talks and lectures. For example, Jack Hidary
        from Google recently gave a talk on AI and the future of quantum
        technologies, where we had a turnout of over 300 students. We also want
        to branch out and start organising events to generate enthusiasm for
        STEM amongst young people. The Marketing group has three main areas of
        focus: branding, improving our visibility on campus, social media. As a
        new society, we need to develop our brand and make our voice heard on
        campus so we can continue to recruit creative minds. For both
        recruitment purposes and for building our online image that potential
        sponsors will see, we need to develop our presence on social media.
        <br />
        Preferred Skills:
        <ul>
          <li>Graphic design experience</li>
          <li>Social media managing experience</li>
          <li>Event organisation and management experience</li>
        </ul>
      </StyledParagraph>
      <StyledParagraph id="rendering" title="Rendering">
        Do you have previous experience with rendering softwares such as
        blender, Maya 3DS Max Design, or any other softwares used for creating
        photorealistic images? If so, you would be very valuable to our
        Hyperloop Manchester team! We are looking for someone to spice up our
        CAD models and designs, making them attractive for our sponsors and
        external partners, and social media posts.
        <br />
        Preferred Skills:
        <ul>
          <li>Blender (or equivalent software)</li>
          <li>3D Design software experience</li>
        </ul>
      </StyledParagraph>
    </Layout>
  );
}
