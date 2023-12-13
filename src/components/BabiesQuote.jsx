import React, { useCallback } from "react";
import "../styles/BabiesQuote.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import babiesQuoteParticlesConfig from "../ts-particles-config-files/babies-quote-particles-config";

function BabiesQuote() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="babies-quote">
      <Particles
        id="babies-quote-ts-particles"
        init={particlesInit}
        options={babiesQuoteParticlesConfig}
      ></Particles>
      <div className="inner-content">
        <h1>Heartly Welcome to My Cousin's Aqeeqah Ceremony ...</h1>
        <div className="wrapper">
          <div className="d-inline">
            <h1 className="maashaallaah mr-lg-5 pr-lg-3 mr-4 pr-2">
              ماشاءاللہ
            </h1>
            <img src="../assets/images/ali.png" alt="Baby-Avatar" />
            <h3 className="mt-4 mr-4">--- Muhammad Ali.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BabiesQuote;
