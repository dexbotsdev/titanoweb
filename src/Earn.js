import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Earn = () => {
  return (
    <Container data-aos="fade-In">
      <Row>
        <h2 class="aboutheading " style={{ marginTop: "140px" }}>
          How much can I earn?
        </h2>
        <p class="earnpara" style={{ marginBottom: "130px" }}>
          Our products are powered by DeFi and are designed to help you
          effortlessly generate cash flow from your crypto.
        </p>
        <br />
        <br />
        <br />

        <Col md={6} className="earnb1 mt-5">
          At the end of the year and with $1000 USD of $TITANO invested.
        </Col>
        <Col md={6} style={{ textAlign: "center" }}>
          <p className="earnb1">
            {" "}
            You can earn up to{" "}
            <span style={{ color: "#4cffab" }} data-aos="flip-left">
              $1,002,758.54
            </span>{" "}
            USD of $TITANO at 102,483.58% APY*.
          </p>
          <p className="ep">
            Earnings are calculated in a scenario where the RFV sustains the
            rebase reward for 365 days.
          </p>
          <button className="openapp2 mt-5">Start Earning Now!</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Earn;
