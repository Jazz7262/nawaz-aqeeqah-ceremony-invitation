import React, { useCallback, useState } from "react";
import "../styles/Couple.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import coupleParticlesConfig from "../ts-particles-config-files/couple-particles-config";

function Couple() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  let date1 = Date.parse("2023-12-09T14:00:00");
  const [duration, setDuration] = useState({});
  const [diff1, setDiff] = useState(0);

  function getDuration() {
    let date2 = Date.now();
    let diff = date1 - date2;
    setDiff(diff);

    setDuration({
      days:
        Math.floor(diff / (1000 * 60 * 60)) > 99
          ? Math.floor(diff / (1000 * 60 * 60 * 24))
          : 0,
      hours:
        Math.floor(diff / (1000 * 60 * 60)) > 99
          ? Math.floor(diff / (1000 * 60 * 60)) % 24
          : Math.floor(diff / (1000 * 60 * 60)),
      mins: Math.floor(diff / (1000 * 60)) % 60,
      secs: Math.floor(diff / 1000) % 60,
    });
  }

  setInterval(getDuration, 1000);

  function formatNum(temp) {
    if (temp > 9) return temp;
    if (temp > 0) return "0" + temp;
    return "00";
  }

  return (
    <section id="couple">
      <div className="couple-wrapper">
        <Particles
          id="couple-ts-particles"
          init={particlesInit}
          options={coupleParticlesConfig}
        ></Particles>
        <div className="baby-1 mb-5">
          <h1 className="title-quote mb-4">
            Aqeeqa and Naming of Our Second Daughter
          </h1>
          {/* <div className="row">
                    <div className="col-lg-5" data-aos="fade-up"> */}
          <div
            id="carouselIndicators"
            className="carousel slide"
            data-interval="2000"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselIndicators" data-slide-to="1"></li>
              <li data-target="#carouselIndicators" data-slide-to="2"></li>
              {/* <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="3"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="4"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="5"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="6"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="7"
                                ></li> */}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="img-wrapper">
                  <img
                    className="couple-img"
                    src="../assets/images/kinza-1.png"
                    alt="couple_img"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-wrapper">
                  <img
                    className="couple-img"
                    src="../assets/images/kinza-2.png"
                    alt="couple_img"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-wrapper">
                  <img
                    className="couple-img"
                    src="../assets/images/kinza-3.png"
                    alt="couple_img"
                  />
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
            <img
              className="flower groom-flower"
              src="../assets/images/golden-rose.png"
              alt="flower"
            />
          </div>
          <div className="info groom-info">
            {diff1 > 0 ? (
              <>
                <h3>
                  T. K***a M*hr**h
                  {/* <sub>MCA,</sub> */}
                </h3>
                <p className="mt-2 mt-lg-3">
                  we will reveal our Daughter's name in{" "}
                  <strong>
                    {formatNum(duration.hours)}:{formatNum(duration.mins)}:
                    {formatNum(duration.secs)}
                  </strong>
                </p>
              </>
            ) : (
              <h3>
                T. Kinza Mehrish
                {/* <sub>MCA,</sub> */}
              </h3>
            )}
            <p className="mt-2 mt-lg-3">
              DOB:{" "}
              <strong>
                09<sup>th</sup> August, 2023.
              </strong>
            </p>
            <p className="mt-1 mt-lg-2">
              <strong>
                22<sup>nd</sup> Muharramul-Haraam, 1445.
              </strong>
            </p>
            {/* <p className="mt-2 mt-lg-3">
            Proprietor: <strong>SSV PAints,</strong> Asianpaints Authorised
            Dealer
          </p> */}
            {/* <p className="mt-1 mt-lg-2"> at Alur.</p> */}
            {/* <p className="mt-2 mt-lg-3">
                                S/O Janab{" "}
                                <strong>Shabeer Ahmed Sahab(Late)</strong>
                            </p> */}
            <p className="mt-1 mt-lg-2">
              D/O <strong>Mr. & Mrs. T. Ghouse Moinuddin,</strong>{" "}
            </p>
            <p className="mt-1 mt-lg-2">
              Paternal Grand D/O Janab <strong>T. Abdul Salaam,</strong>{" "}
            </p>
            <p className="mt-1 mt-lg-2">
              Maternal Grand D/O Janab <strong>Attar Taher Basha,</strong>{" "}
            </p>

            {/* <p className="mt-1 mt-lg-2">
            S/O Janab <strong>B. Khadar Sahab,</strong>{" "}
          </p>
          <p className="mt-1 mt-lg-2">APSRTC, Adoni.</p>
          <p className="mt-1 mt-lg-2">Residence at RTC Colony, Adoni.</p> */}
          </div>
        </div>
        <div className="baby-2">
          <h1 className="title-quote mb-4">
            Bisimillaah Khani Ceremony of Our Elder Daughter
          </h1>
          {/* <div className="row">
                    <div className="col-lg-5" data-aos="fade-up"> */}
          <div
            id="baby-2"
            className="carousel slide"
            data-interval="2000"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#baby-2"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#baby-2" data-slide-to="1"></li>
              <li data-target="#baby-2" data-slide-to="2"></li>
              {/* <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="3"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="4"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="5"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="6"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="7"
                                ></li> */}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="img-wrapper">
                  <img
                    className="couple-img"
                    src="../assets/images/jasra-1.jpg"
                    alt="couple_img"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-wrapper">
                  <img
                    className="couple-img"
                    src="../assets/images/jasra-2.png"
                    alt="couple_img"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-wrapper">
                  <img
                    className="couple-img"
                    src="../assets/images/jasra-3.png"
                    alt="couple_img"
                  />
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#baby-2"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#baby-2"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
            <img
              className="flower groom-flower"
              src="../assets/images/golden-rose.png"
              alt="flower"
            />
          </div>
          <div className="info groom-info">
            <h3>
              T. Jasra Manahil
              {/* <sub>MCA,</sub> */}
            </h3>
            {/* <p className="mt-2 mt-lg-3">
            Proprietor: <strong>SSV PAints,</strong> Asianpaints Authorised
            Dealer
          </p> */}
            {/* <p className="mt-1 mt-lg-2"> at Alur.</p> */}
            {/* <p className="mt-2 mt-lg-3">
                                S/O Janab{" "}
                                <strong>Shabeer Ahmed Sahab(Late)</strong>
                            </p> */}
            <p className="mt-1 mt-lg-2">
              D/O <strong>Mr. & Mrs. T. Ghouse Moinuddin,</strong>{" "}
            </p>
            <p className="mt-1 mt-lg-2">
              Paternal Grand D/O Janab <strong>T. Abdul Salaam,</strong>{" "}
            </p>
            <p className="mt-1 mt-lg-2">
              Maternal Grand D/O Janab <strong>Attar Taher Basha,</strong>{" "}
            </p>

            {/* <p className="mt-1 mt-lg-2">
            S/O Janab <strong>B. Khadar Sahab,</strong>{" "}
          </p>
          <p className="mt-1 mt-lg-2">APSRTC, Adoni.</p>
          <p className="mt-1 mt-lg-2">Residence at RTC Colony, Adoni.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Couple;
