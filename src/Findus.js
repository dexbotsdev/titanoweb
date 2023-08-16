import React from "react";
import coinmarket from "./images/coinMarket.png";
import coinGecko from "./images/coinGecko.png";
import certik from "./images/certik.png";
import solidityFinance from "./images/solidityFinance.png";
import yahooFinance from "./images/yahooFinance.png";
import yahooNews from "./images/yahooNews.png";
import markerWatch from "./images/markerWatch.png";
import benzinga from "./images/benzinga.png";
const Findus = () => {
  return (
    <div>
      <div
        class="container finduscont mainmargin"
        id="Findus"
        data-aos="fade-In"
      >
        <div class="row">
          <h2 class="col-md-12 aboutheading">Find us on</h2>
        </div>
        <div class="row">
          <div class="col-md-3 col-6 ">
            <img className="findusimg wimg" src={coinmarket} />
          </div>
          <div class="col-md-3 col-6 ">
            {" "}
            <img className="findusimg wimg" src={coinGecko} />{" "}
          </div>
          <div class="col-md-3 col-6 ">
            <img className="findusimg wimg" src={certik} />
          </div>
          <div class="col-md-3 col-6 ">
            <img class=" findusimg wimg" src={solidityFinance} />
          </div>
          <div class="col-md-3 col-6 ">
            <img className="findusimg wimg" src={yahooFinance} />
          </div>
          <div class="col-md-3 col-6 ">
            <img className="findusimg wimg" src={yahooNews} />
          </div>
          <div class="col-md-3 col-6 ">
            <img className="findusimg wimg" src={markerWatch} />
          </div>
          <div class="col-md-3 col-6 ">
            <img class=" findusimg" src={benzinga} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findus;
