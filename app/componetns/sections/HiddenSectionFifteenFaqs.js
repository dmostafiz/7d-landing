import Faqs from "../Faqs";

export default function HiddenSectionFifteenFaqs({ isVisible }) {
  return (
    <div
      className={`hidden-section radius0 noBorder c-section c-wrapper section-SG1NE07V86 ${
        isVisible ? "shown" : ""
      }`}
      style={{}}
      id="section-SG1NE07V86"
    >
      <div className="inner">
        <div
          className="row-align-center noBorder radius0 none c-row c-wrapper row-g2qDABQmkZ"
          id="row-g2qDABQmkZ"
        >
          <div className="inner">
            <div
              className="parent-sticky noBorder radius0 none c-column c-wrapper col-M67ugTNZxA"
              id="col-M67ugTNZxA"
            >
              <div className="vertical inner">
                <div id="heading-O36D5D14DF" className="c-heading c-wrapper">
                  <div
                    className="heading-O36D5D14DF text-output cheading-O36D5D14DF noBorder radius0 animate__fadeInUp"
                    data-animation-class="animate__animated animate__fadeInUp"
                  >
                    <div>
                      <h1>
                        Frequently<strong> </strong>Asked{" "}
                        <strong>Questions</strong>
                      </h1>
                    </div>
                  </div>
                </div>

                <div
                  id="button-BIWRGNI32V"
                  className="c-button c-wrapper button-BIWRGNI32V desktop-only"
                >
                  <a
                    id="button-BIWRGNI32V_btn"
                    href="#col-I0sYxFe1mn"
                    target=""
                    data-animation-class=""
                    className="cbutton-BIWRGNI32V main-btn button-vp-10 btn-hp-25 noBorder radius0 text-center"
                    aria-label="Get Instant Access! "
                  >
                    <span style={{}} className="main-heading-group">
                      <span
                        style={{ marginRight: 5 }}
                        className="button-icon-start"
                      />
                      <span className="main-heading-button">
                        Get Instant Access!
                      </span>
                      <span
                        style={{ marginLeft: 5 }}
                        className="button-icon-end"
                      />
                    </span>
                  </a>

                  <div></div>
                </div>
              </div>
            </div>

            <div
              className="noBorder radius0 none c-column c-wrapper col-xddjg3OXS5"
              id="col-xddjg3OXS5"
            >
              <div className="vertical inner">
                <div
                  id="faq-7J4UTWjSHn"
                  className="c-faq c-wrapper faq-7J4UTWjSHn"
                >
                  {/* FAQs Component  */}

                  <Faqs />

                  {/* FAQs Component  End*/}
                </div>

                <div
                  id="button-S6ALlEYww5"
                  className="c-button c-wrapper button-S6ALlEYww5 mobile-only"
                >
                  <a
                    id="button-S6ALlEYww5_btn"
                    href="#col-I0sYxFe1mn"
                    target=""
                    data-animation-class=""
                    className="cbutton-S6ALlEYww5 main-btn button-vp-10 btn-hp-25 noBorder radius0 text-center"
                    aria-label="Get Instant Access! "
                  >
                    <span style={{}} className="main-heading-group">
                      <span
                        style={{ marginRight: 5 }}
                        className="button-icon-start"
                      />
                      <span className="main-heading-button">
                        Get Instant Access!
                      </span>
                      <span
                        style={{ marginLeft: 5 }}
                        className="button-icon-end"
                      />
                    </span>
                  </a>

                  <div></div>
                </div>

                <div
                  id="paragraph-Trww3FfV0n"
                  className="c-paragraph c-wrapper mobile-only"
                >
                  <div
                    className="paragraph-Trww3FfV0n text-output cparagraph-Trww3FfV0n np noBorder radius0"
                    data-animation-class=""
                  >
                    <div>
                      <p>100% Secure 256-Bit Security Encryption</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
