import React from "react";
import porone from "../../picss/1por.jpg";
import portwo from "../../picss/2por.jpg";
import porthree from "../../picss/3por.jpg";
import porfour from "../../picss/4por.jpg";
import porfive from "../../picss/5por.jpg";
import porsix from "../../picss/6por.jpg";
import porseven from "../../picss/7por.jpg";
import poreight from "../../picss/8por.jpg";

export default function Portfolio() {
  return (
    <div class="container-fluid bg-info">
      <div class="col-md-12 text-center mt-5">
        <p data-aos="zoom-in" className="rsm">
          WHAT MAKES
          <b>US DIFFERENT</b>
        </p>
        <p className="biodata">
          With our approach to Web Design, our methods continue to be proven in
          a continuous challenging marketplace with delivering what we promise.
        </p>
      </div>
      <div class="row text-center">
        <div class="col-md-3">
          <img class="img-fluid" src={porone} />
        </div>
        <div class="col-md-3">
          <img class="img-fluid" src={portwo} />
        </div>
        <div class="col-md-3">
          <img class="img-fluid" src={porthree} />
        </div>
        <div class="col-md-3">
          <img class="img-fluid" src={porfour} />
        </div>
      </div>
      <div class="row text-center mt-4">
        <div class="col-md-3">
          <img class="img-fluid" src={porfive} />
        </div>
        <div class="col-md-3">
          <img class="img-fluid" src={porsix} />
        </div>
        <div class="col-md-3">
          <img class="img-fluid" src={porseven} />
        </div>
        <div class="col-md-3">
          <img class="img-fluid" src={poreight} />
        </div>
      </div>
    </div>
  );
}
