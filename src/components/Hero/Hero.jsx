import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import PortfolioContext from "../../context/context";
import Iframe from "react-iframe";
import Title from "../Title/Title";

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [link, setLink] = useState(
    "https://docs.google.com/document/d/1uhf52fVU1Y3ofqxcO2QL1pBAEsexWsMayeaXqZ5HR8E/edit?usp=sharing"
  );

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    setLink(
      "https://docs.google.com/document/d/1uhf52fVU1Y3ofqxcO2QL1pBAEsexWsMayeaXqZ5HR8E/edit?usp=sharing"
    );
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className="hero-title">
            {title || "Welcome "}{" "}
            <span className="text-color-main">
              {name || "Champions League"}
            </span>
            <br />
            {subtitle ||
              "Remember to stay hydrated, keep your masks with you, and have fun ;)"}
          </h1>
          <h2>Use #ThaiSACL2020 when you post pics!</h2>
        </Fade>

        {/* <Fade bottom duration={1000} delay={600} distance="30px">
          <div className="about-wrapper__image">
            <AboutImg alt="schedule" filename={img} />
          </div>
        </Fade> */}

        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || "Scroll or Click for Info"}
              </Link>
            </span>
          </p>
        </Fade>
        {/* <GoogleDocsViewer
          width="600px"
          height="780px"
          fileUrl="https://docs.google.com/document/d/1uhf52fVU1Y3ofqxcO2QL1pBAEsexWsMayeaXqZ5HR8E/edit?usp=sharing"
        /> */}
        {/* <iframe
          src="https://web.archive.org/web/20141219073731/http://docs.google.com/viewer?url=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1uhf52fVU1Y3ofqxcO2QL1pBAEsexWsMayeaXqZ5HR8E%2Fedit%3Fusp%3Dsharing&embedded=true"
          width="600"
          height="780"
          style="border: none;"
        ></iframe> */}
      </Container>
    </section>
  );
};

export default Header;
