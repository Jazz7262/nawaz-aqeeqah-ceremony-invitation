import React, { useCallback } from "react";
import "../styles/Timeline.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import timelineParticlesConfig from "../ts-particles-config-files/timeline-particles-config";

function Timeline() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="timeline">
      <Particles
        id="timeline-ts-particles"
        init={particlesInit}
        options={timelineParticlesConfig}
      ></Particles>
      <div className="single-timeline">
        <h1 className="inshaallaah">Inshaallaah ...</h1>

        <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
          <div className="content">
            <h1>Naming Ceremony</h1>
            <p>
              On Saturday, 09<sup>th</sup> Decemeber, 2023,
              <br />
              25<sup>th</sup> Jamaadil-Awaal, 1445 Hijri,
              <br />
              After Namaaz -e- Zohar,
              <br />
              Time: 02:00 PM.
            </p>
            <h2>Venue:</h2>
            <p>
              International Function Hall,
              <br /> 3<sup>rd</sup> road, SKD Colony,
              <br /> Adoni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
