import React from "react";
import { Parallax } from "react-parallax";
import bkgParallax from "../../../images/bkgParallax.jpg"
const Banner = () => {
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  return (
    <>
      <Parallax bgImage={bkgParallax} strength={500}>
        <div style={{ height: 500 }}>
          
        </div>
      </Parallax>
    </>
  );
};

export default Banner;
