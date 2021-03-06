import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title/Title";
import AboutImg from "../Image/AboutImg";
import PortfolioContext from "../../context/context";
import Iframe from "react-iframe";

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Schedule" />
        <Fade bottom duration={1000} delay={600} distance="30px">
          <div className="about-wrapper__image">
            <AboutImg alt="schedule" filename={img} />
          </div>
        </Fade>
        <Title title="Announcements" />
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Iframe
              url="https://docs.google.com/document/d/1uhf52fVU1Y3ofqxcO2QL1pBAEsexWsMayeaXqZ5HR8E/edit?usp=sharing&rm=minimal"
              position="relative"
              width="100%"
              height="100%"
            />
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default About;
