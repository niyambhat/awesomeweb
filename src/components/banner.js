import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Namaste 🙏! I am Niyam Singh Bhat</span>
            </div>
            <div className='line'>
              <span>A Full-Stack Web Developer.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/'>
              More about me <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
