import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import PortfolioContext from "../../context/context";

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
      </Container>
    </section>
  );
};

export default Header;
