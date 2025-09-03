"use client";
import { useState } from "react";
import HiddenSections from "../HiddenSections";
import VideoPlayer from "../VideoPlayer";
import JoinForm from "../form/JoinForm";

const videoLink = "https://s3.us-west-1.amazonaws.com/shop-xcelerate/resources/7d-video.mp4"

export default function AllSections() {
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: true,
    muted: true,
    preload: "auto",
    sources: [
      {
        src: "https://s3.us-west-1.amazonaws.com/shop-xcelerate/resources/7d-video.mp4",
        type: "video/mp4", // This is key for HLS
      },
    ],
  };

  const [hiddenSectionsVisible, setHiddenSectionsVisible] = useState(false);
  const showHiddenSections = () => {
    setHiddenSectionsVisible(true);
  };
  return (
    <>
      <div
        className="radius0 noBorder c-section c-wrapper section-0VNQ2OZUPV"
        style={{}}
        id="section-0VNQ2OZUPV"
      >
        <div className="inner">
          <div
            className="row-align-center noBorder radius0 c-row c-wrapper row-GYMX007VOO"
            id="row-GYMX007VOO"
          >
            <div className="inner">
              <div
                className="c-column c-wrapper col-ICLQJC5MGU"
                id="col-ICLQJC5MGU"
              >
                <div className="noBorder radius0 bg bgCover vertical inner">
                  <div
                    id="sub-heading-QK66M5TZML"
                    className="c-sub-heading c-wrapper"
                  >
                    <div
                      className="sub-heading-QK66M5TZML text-output csub-heading-QK66M5TZML noBorder radius0 animate__fadeInUp"
                      data-animation-class="animate__animated animate__fadeInUp"
                    >
                      <div>
                        <h2>
                          STILL CHASING COMMISSIONS? IT’S TIME TO BUILD WEALTH!
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div id="heading-6CHAP2USMB" className="c-heading c-wrapper">
                    <div
                      className="heading-6CHAP2USMB text-output cheading-6CHAP2USMB noBorder radius0 animate__fadeInUp"
                      data-animation-class="animate__animated animate__fadeInUp"
                    >
                      <div>
                        <h1>
                          <strong>Join the $7 Wealth Community </strong>That
                          Shows You How to Make, Keep, and Grow Money Online and
                          Offline Even If You’re Starting From Scratch
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div
                    id="sub-heading-7D98EO50WR"
                    className="c-sub-heading c-wrapper"
                  >
                    <div
                      className="sub-heading-7D98EO50WR text-output csub-heading-QK66M5TZML noBorder radius0 animate__fadeInUp"
                      data-animation-class="animate__animated animate__fadeInUp"
                    >
                      <div>
                        <h2>
                          You’ve tried side hustles, courses and affiliate offers. Maybe made a little... but are you free yet?
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row-align-center noBorder radius0 c-row c-wrapper row-P402PN2RQG"
            id="row-P402PN2RQG"
          >
            <div className="inner">
              <div
                className="parent-sticky noBorder radius0 none c-column c-wrapper col-zgq88SQXmG"
                id="col-zgq88SQXmG"
              >
                <div className="vertical inner">
                  <div
                    id="video-2KJ81WRLMP"
                    className="c-video c-wrapper video-2KJ81WRLMP"
                  >
                    <div
                      className="mx-auto w-100 cvideo-2KJ81WRLMP noBorder radius0"
                      data-v-9069ad15=""
                    >
                      <div className="h-100 w-100">
                        <VideoPlayer options={videoJsOptions} />
                      </div>
                    </div>
                  </div>

                  <div
                    id="paragraph-ufpGfxO9PB"
                    className="c-paragraph c-wrapper"
                  >
                    <div
                      className="paragraph-ufpGfxO9PB text-output cparagraph-ufpGfxO9PB np noBorder radius0"
                      data-animation-class=""
                    >
                      <div>
                        <p>
                          It’s time to stop starting over and start building a
                          financial system that lasts.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="heading-I14WPDOODV" className="c-heading c-wrapper">
                    <div
                      className="heading-I14WPDOODV text-output csub-heading-QK66M5TZML noBorder radius0"
                      data-animation-class=""
                      style={{
                        textAlign: 'left'
                      }}
                    >
                      <div>
                        <h1>REAL WEALTH ISN’T JUST ABOUT MAKING MONEY</h1>
                      </div>
                    </div>
                  </div>

                  <div
                    id="paragraph-T6gG0sOxXe"
                    className="c-paragraph c-wrapper"
                  >
                    <div
                      className="paragraph-T6gG0sOxXe text-output cparagraph-T6gG0sOxXe noBorder radius0 none"
                      data-animation-class=""
                    >
                      <div>
                        <p>
                          <br />
                          It’s About What You Do With It and How You Make It
                          Work For You
                        </p>
                        <p>
                          Most people are stuck in one of two traps: <br />
                        </p>



                        <div
                          className="bulletList-FAgVt5QUUc text-output cbulletList- noBorder radius0 none"
                          data-animation-class=""
                        >
                          <div>
                            <ul>
                              <li>
                                <p> They don’t know how to start building income streams
                                  that actually scale</p>
                              </li>
                              <li>
                                <p>They make some cash but don't know how to grow it and exit the rat race</p>
                              </li>

                            </ul>
                          </div>

                        </div>

                        <p style={{ margin: "20px 0" }}>We fix both.</p>
                        <p>
                          Inside the $7 Wealth Community, you’ll learn how to:{" "}
                          <br />
                        </p>

                        <div
                          className="bulletList-FAgVt5QUUc text-output cbulletList- noBorder radius0 none"
                          data-animation-class=""
                        >
                          <div>
                            <ul>
                              <li>
                                <p> Start earning real income online and offline even if
                                  you're brand new</p>
                              </li>
                              <li>
                                <p>Build systems that create passive income and sales
                                  24/7</p>
                              </li>
                              <li>
                                <p>Use smart strategies to keep more of your money</p>
                              </li>
                              <li>
                                <p>Turn your income into long-term wealth and freedom</p>
                              </li>
                            </ul>
                          </div>

                        </div>
                        <p className="mb-4">
                          This is a complete blueprint from making your first
                          dollar to retiring early
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    id="button-6QlT92C0Bd"
                    className="c-button c-wrapper button-6QlT92C0Bd"
                  >
                    <button
                      data-animation-class=""
                      id="button-6QlT92C0Bd_btn"
                      style={{ display: hiddenSectionsVisible ? "none" : "" }}
                      onClick={showHiddenSections}
                      className="cbutton-6QlT92C0Bd revealbtn custom btn-vp btn-hp  borderFull radius75 none"
                      aria-label="See The Full Page here "
                    >
                      <div style={{}} className="main-heading-group">
                        <div className="button-icon-start" />
                        <div className="main-heading-button">
                          See The Full Page here
                        </div>
                        <div className="button-icon-end" />
                      </div>

                      <div
                        style={{
                          display: "none",
                          left: "50%",
                          position: "absolute",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                        className="btn-loader-position"
                      >
                        <div style={{ display: "none" }} className="v-spinner">
                          <div
                            className="v-moon v-moon1"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "100%",
                            }}
                          >
                            <div
                              className="v-moon v-moon2"
                              style={{
                                height: "4.285714285714286px",
                                width: "4.285714285714286px",
                                borderRadius: "100%",
                                top: "12.857142857142858px",
                                backgroundColor: "rgb(255, 255, 255)",
                              }}
                            />
                            <div
                              className="v-moon v-moon3"
                              style={{
                                height: 30,
                                width: 30,
                                borderRadius: "100%",
                                border:
                                  "4.285714285714286px solid rgb(255, 255, 255)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                    <div></div>
                  </div>

                  <div
                    id="custom-code-LRvTUjMvME"
                    className="c-custom-code c-wrapper custom-code-LRvTUjMvME"
                  >
                    <div
                      id="custom-code-LRvTUjMvME"
                      className="custom-code-container ccustom-code-LRvTUjMvME"
                    >
                      {" "}
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n        .hidden-section {\n            display: none;\n        }\n        .shown {\n            display: block;\n        }\n    ",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="borderFull radius10 none c-column c-wrapper col-I0sYxFe1mn"
                id="col-I0sYxFe1mn"
              >
                <div className="vertical inner">
                  <div id="heading-9BPG62KWRH" className="c-heading c-wrapper">
                    <div
                      className="heading-9BPG62KWRH text-output cheading-9BPG62KWRH noBorder radius0"
                      data-animation-class=""
                    >
                      <div>
                        <h1>Join Now For $7</h1>
                      </div>
                    </div>
                  </div>

                  <div
                    id="image-NRWKU49989"
                    className="c-image c-wrapper image-NRWKU49989"
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      className="image-container cimage-NRWKU49989"
                    >
                      <div>
                        <div>
                          <img
                            style={{}}
                            src="/img/1.png"
                            alt=""
                            className="radius0"
                            data-animation-class=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <JoinForm />

                  <div
                    id="sub-heading-1CRUE5C7ZL"
                    className="c-sub-heading c-wrapper"
                  >
                    <div
                      className="sub-heading-1CRUE5C7ZL text-output csub-heading-1CRUE5C7ZL noBorder radius0"
                      data-animation-class=""
                    >
                      <div>
                        <h2>
                          <strong>Join The $7 Community  - TODAY</strong>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div
                    id="paragraph-Z2FUYMNCD3"
                    className="c-paragraph c-wrapper"
                  >
                    <div
                      className="paragraph-Z2FUYMNCD3 text-output cparagraph-Z2FUYMNCD3 np noBorder radius0"
                      data-animation-class=""
                    >
                      <div>
                        <p>
                          <strong>
                            Get Full Access Right Away.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    id="paragraph-TUFGZ46ZF4"
                    className="c-paragraph c-wrapper"
                  >
                    <div
                      className="paragraph-TUFGZ46ZF4 text-output cparagraph-TUFGZ46ZF4 np noBorder radius0"
                      data-animation-class=""
                    >
                      {/* <div>
                        <p>Bonuses Will Be Delivered Instantly.</p>
                        <p>Get Full Access Right Away.</p>
                      </div> */}
                    </div>
                  </div>

                  <div
                    id="image-CL25CF09C3"
                    className="c-image c-wrapper image-CL25CF09C3"
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      className="image-container cimage-CL25CF09C3"
                    >
                      <div>
                        <div>
                          <img
                            style={{}}
                            src="images/order-form-payment-methods.png"
                            alt=""
                            className="radius0"
                            data-animation-class=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="paragraph-9JHLUJ96OJ"
                    className="c-paragraph c-wrapper"
                  >
                    <div
                      className="paragraph-9JHLUJ96OJ text-output cparagraph-9JHLUJ96OJ np noBorder radius0"
                      data-animation-class=""
                    >
                      <div>
                        <p>🔒100% Secure 256-Bit Security Encryption</p>
                      </div>
                    </div>
                  </div>

                  <div
                    id="image-TLCWQVFT4F"
                    className="c-image c-wrapper image-TLCWQVFT4F"
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      className="image-container cimage-TLCWQVFT4F"
                    >
                      <div>
                        <div>
                          <img
                            style={{}}
                            src="/images/safe-checkout.png"
                            alt=""
                            className="radius0"
                            data-animation-class=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="button-NT38QE4307"
                    className="c-button c-wrapper button-NT38QE4307 mobile-only"
                  >
                    <button
                      data-animation-class=""
                      id="button-NT38QE4307_btn"
                      style={{}}
                      className="cbutton-NT38QE4307 main-btn button-vp-10 btn-hp-25 noBorder radius0"
                      aria-label="See The Rest 👇 "
                    >
                      <div style={{}} className="main-heading-group">
                        <div className="button-icon-start" />
                        <div className="main-heading-button">
                          See The Rest 👇
                        </div>
                        <div className="button-icon-end" />
                      </div>

                      <div
                        style={{
                          display: "none",
                          left: "50%",
                          position: "absolute",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                        className="btn-loader-position"
                      >
                        <div style={{ display: "none" }} className="v-spinner">
                          <div
                            className="v-moon v-moon1"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "100%",
                            }}
                          >
                            <div
                              className="v-moon v-moon2"
                              style={{
                                height: "4.285714285714286px",
                                width: "4.285714285714286px",
                                borderRadius: "100%",
                                top: "12.857142857142858px",
                                backgroundColor: "rgb(255, 255, 255)",
                              }}
                            />
                            <div
                              className="v-moon v-moon3"
                              style={{
                                height: 30,
                                width: 30,
                                borderRadius: "100%",
                                border:
                                  "4.285714285714286px solid rgb(255, 255, 255)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row-align-center noBorder radius0 none c-row c-wrapper row-8dkzqlbuJI mobile-only"
            id="row-8dkzqlbuJI"
          >
            <div className="inner">
              <div
                className="noBorder radius0 none c-column c-wrapper col-dRh6YYK2m2 mobile-only"
                id="col-dRh6YYK2m2"
              >
                <div className="vertical inner">
                  <div
                    id="button-RDOJysE-JK"
                    className="c-button c-wrapper button-RDOJysE-JK mobile-only"
                  >
                    <button
                      data-animation-class=""
                      id="button-RDOJysE-JK_btn"
                      style={{ display: "none" }}
                      className="cbutton-RDOJysE-JK revealbtn custom btn-vp btn-hp  borderFull radius75 none"
                      aria-label="See The Full Page here "
                    >
                      <div style={{}} className="main-heading-group">
                        <div className="button-icon-start" />
                        <div className="main-heading-button">
                          See The Full Page here
                        </div>
                        <div className="button-icon-end" />
                      </div>

                      <div
                        style={{
                          display: "none",
                          left: "50%",
                          position: "absolute",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                        className="btn-loader-position"
                      >
                        <div style={{ display: "none" }} className="v-spinner">
                          <div
                            className="v-moon v-moon1"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "100%",
                            }}
                          >
                            <div
                              className="v-moon v-moon2"
                              style={{
                                height: "4.285714285714286px",
                                width: "4.285714285714286px",
                                borderRadius: "100%",
                                top: "12.857142857142858px",
                                backgroundColor: "rgb(255, 255, 255)",
                              }}
                            />
                            <div
                              className="v-moon v-moon3"
                              style={{
                                height: 30,
                                width: 30,
                                borderRadius: "100%",
                                border:
                                  "4.285714285714286px solid rgb(255, 255, 255)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HiddenSections isVisible={hiddenSectionsVisible} />
    </>
  );
}
