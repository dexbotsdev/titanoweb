import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container id="About" data-aos="fade-right">
        <Row className="mainmargin">
          <h2 class="aboutheading">Titano Autostaking Protocol</h2>

          <Col md={6} className="mt-3">
            <h2 className="count">102 483.53$</h2>
            <h4 className="fixed">Fixed Staking APY</h4>
            <button className="openapp2 mt-5">
              Open App{""} {""}{" "}
            </button>
          </Col>
          <Col md={6} className="mt-5">
            <span className="aboutheading2">ABOUT</span>
            <p className="aboutpara">
              Titano Finance is transforming DeFi with the Titano Autostaking
              Protocol (TAP) that delivers the industry’s highest fixed APY,
              rebasing rewards every 30 minutes, and a simple buy-hold-earn
              system that grows your portfolio in your wallet, fast.
            </p>
          </Col>

          <p className="address mt-3">
            $TITANO Contract: 0xba96731324de188ebc1ed87ca74544ddebc07d7f
          </p>
          <div className="water">
            <div className="pad">
              <h2 className="addresspara">
                Titano rewards holders with automatic compounding interest,
                increasing their TITANO holdings over time.
              </h2>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default About;
