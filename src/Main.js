import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import gif from "./images/gif.gif";
const Main = () => {
  return (
    <div>
      <Container data-aos="fade-in">
        <Row>
          <Col md={8} className="mainmargin">
            <h2 className="Mainheading">
              The Best Auto-Staking &amp; Auto-Compounding Protocol in Crypto
            </h2>
            <ul className="Mainlist mt-5">
              <li className="mt-2">Highest Fixed APY – 102,483%</li>
              <li className="mt-2">
                First Automatic Staking and Compounding in Your Wallet!
              </li>
              <li className="mt-2">
                Get Rewards Every 30 Minutes / 48 Times Daily!
              </li>
            </ul>
          </Col>
          <Col md={4} className="mainmargin">
            <img src={gif} className="gif" />
          </Col>
        </Row>
        <Row className="mt-5 roww2">
          <button className="buybutton mt-4">Buy $Titano</button>
          <button className="buybutton2 mt-4">White Paper</button>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
