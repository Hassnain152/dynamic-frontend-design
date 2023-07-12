import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Differ.css";
import per from "../../picss/person.png";
import { BsPersonBoundingBox } from "react-icons/bs";
import { BiTimer } from "react-icons/bi";
import { FaAssistiveListeningSystems } from "react-icons/fa";
export default function Differ() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="differ">
      <div class="container">
        <div class="col-md-12 text-center mt-5">
          <p data-aos="zoom-in" className="rsm">
            WHAT MAKES
            <b>US DIFFERENT</b>
          </p>
          <p className="biodata">
            With our approach to Web Design, our methods continue to be proven
            in a continuous challenging marketplace with delivering what we
            promise.
          </p>
        </div>
        <div class="row">
          <div class="col-lg-7 col-md-12 mt-5">
            <div class="card mb-3 border-0">
              <div class="row g-0">
                <div class="col-md-2 border border-info border-start-0 border-bottom-0 border-top-0">
                  <div
                    class="ms-4 mt-4"
                    style={{ color: "#00badc", fontSize: "70px" }}
                  >
                    <BsPersonBoundingBox />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">WE TALK WITH CUSTOMERS</h5>
                    <p class="card-text">
                      <small class="text-muted">
                        Our experts discuss the project with customers to get a
                        clear idea about their expectations and requirements.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 border-0">
              <div class="row g-0">
                <div class="col-md-2 border border-info border-start-0 border-bottom-0 border-top-0">
                  <div
                    class=" ms-4 mt-4"
                    style={{ color: "#00badc", fontSize: "70px" }}
                  >
                    <BiTimer />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">WE TALK WITH CUSTOMERS</h5>
                    <p class="card-text">
                      <small class="text-muted">
                        Our experts discuss the project with customers to get a
                        clear idea about their expectations and requirements.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 border-0">
              <div class="row g-0">
                <div class="col-md-2 border border-info border-start-0 border-bottom-0 border-top-0">
                  <div
                    class="ms-4 mt-4"
                    style={{ color: "#00badc", fontSize: "70px" }}
                  >
                    <FaAssistiveListeningSystems />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">WE TALK WITH CUSTOMERS</h5>
                    <p class="card-text">
                      <small class="text-muted">
                        Our experts discuss the project with customers to get a
                        clear idea about their expectations and requirements.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 d-lg-block d-none">
            <img src={per} />
          </div>
        </div>
      </div>
    </section>
  );
}
