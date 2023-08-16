import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bg from "./images/back2.png";
import img2 from "./images/play.png";
const Play = () => {
  return (
    <div className="playback">
      <Container id="Play">
        <Row className=" ds">
          <Col md={6} data-aos="fade-right">
            <span className="aboutheading21">
              Prize-Linked Accumulating Yield
            </span>
            <br />
            <br />
            <span className="aboutheading">Titano P.L.A.Y.</span>
            <br />
            <br />
            <h1 class="playpara">
              Titano P.L.A.Y. is the new Titano TAP based project that allows
              Titano token holders to generate even more rewards. Simple,
              Powerful and Proven.
            </h1>
            <ul className="list">
              <li>Your Titano Tokens Give You Access to P.L.A.Y.</li>
              <li>Easy to Enter Easy to Play</li>
              <li>Multiple Big Winners Each Week</li>
              <li>No One Loses Their Initial Deposit</li>
              <li>Even if you don’t win, keep all of your money!</li>
            </ul>
            <button className="playnow3">
              Play Now! <i class="fas fa-arrow-right"></i>
            </button>
          </Col>
          <Col md={6} data-aos="flip-left">
            <img
              src={img2}
              style={{
                textAlign: "center",
                display: "flex",
                margin: "auto",
                width: "80%",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Play;
