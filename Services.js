import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SiElementary } from "react-icons/si";
import { BsGear } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import { GiImpactPoint } from "react-icons/gi";
import { MdOutlineDesignServices, MdThumbUpOffAlt } from "react-icons/md";
import { RiComputerLine, RiPixelfedLine } from "react-icons/ri";
import "./Services.css";
export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div class="container mt-5">
      <div class="col-md-12 text-center">
        <p data-aos="zoom-in" className="rsm">
          OUR <b>SERVICES</b>
        </p>
        <p className="biodata">
          With our approach to Web Design, our methods continue to be proven in
          a continuous challenging marketplace with delivering what we promise.
        </p>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div data-aos="zoom-in" class="card  border border-white text-center">
            <div
              class="mb-4 mt-5"
              style={{ color: "#00badc", fontSize: "70px" }}
            >
              <RiComputerLine />
            </div>

            <h5>
              WEB <b>DEVELOPMENT</b>
            </h5>
            <p>
              Our experienced design team has the imagination and vision to
              deliver print media.
            </p>
            <a href="#" class="btn btn mt-2" className="learn-btn">
              LEARN MORE
            </a>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 ">
          <div data-aos="zoom-in" class="card  border border-white text-center">
            <div
              class="mb-4 mt-5"
              style={{ color: "#00badc", fontSize: "70px" }}
            >
              <MdOutlineDesignServices />
            </div>

            <h5>
              GRAPHIC <b>DESIGN</b>
            </h5>
            <p>
              Our experienced design team has the imagination and vision to
              deliver print media.
            </p>
            <a href="#" class="btn btn mt-2" className="learn-btn">
              LEARN MORE
            </a>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 ">
          <div data-aos="zoom-in" class="card  border border-white text-center">
            <div
              class="mb-4 mt-5"
              style={{ color: "#00badc", fontSize: "70px" }}
            >
              <GiImpactPoint />
            </div>

            <h5>
              SEO <b> OPTIMIZATION</b>
            </h5>
            <p>
              We provide our clients website in which images, css and js are
              highly optimized.
            </p>
            <a href="#" class="btn btn mt-2" className="learn-btn">
              LEARN MORE
            </a>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div data-aos="zoom-in" class="card  border border-white text-center">
            <div
              class="mb-4 mt-5"
              style={{ color: "#00badc", fontSize: "70px" }}
            >
              <MdThumbUpOffAlt />
            </div>

            <h5>
              DEDICATED <b>SUPPORT</b>
            </h5>
            <p>
              Our support team will ensure that your website is up to date and
              protected.
            </p>
            <a href="#" class="btn btn mt-2" className="learn-btn">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div data-aos="zoom-in" class="card  border border-white text-center">
            <div
              class="mb-4 mt-5"
              style={{ color: "#00badc", fontSize: "70px" }}
            >
              <FcDocument />
            </div>

            <h5>
              EXTENSIVE <b> DOCS</b>
            </h5>
            <p>
              We provide our clients with detailed documentation on correct
              operation of their sites.
            </p>
            <a href="#" class="btn btn mt-2" className="learn-btn">
              LEARN MORE
            </a>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div data-aos="zoom-in" class="card  border border-white text-center">
            <div
              class="mb-4 mt-5"
              style={{ color: "#00badc", fontSize: "70px" }}
            >
              <SiElementary />
            </div>

            <h5>
              CREATIVE<b> ELEMENTS</b>
            </h5>
            <p>
              A variety of elements used in our designs helps to achieve a
              certain level of creativity.
            </p>
            <a href="#" class="btn mt-2" className="learn-btn">
              LEARN MORE
            </a>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div data-aos="zoom-in" class="card  border border-white text-center">
            <div
              class="mb-4 mt-5"
              style={{ color: "#00badc", fontSize: "70px" }}
            >
              <BsGear />
            </div>

            <h5>
              HIGHLY <b> CUSTOMIZABLE</b>
            </h5>
            <p>
              Every element used in our designs can be changed or customized,
              and replaced
            </p>
            <a href="#" class="btn btn mt-2" className="learn-btn">
              LEARN MORE
            </a>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div data-aos="zoom-in" class="card  border border-white text-center">
            <div
              class="mb-4 mt-5"
              style={{ color: "#00badc", fontSize: "70px" }}
            >
              <RiPixelfedLine />
            </div>

            <h5>
              PIXEL-PERFECT <b> DESIGN</b>
            </h5>
            <p>
              Every pixel has its own place in our templates and designs we
              create for our clients web sites.
            </p>
            <a href="#" class="btn btn mt-2" className="learn-btn">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
