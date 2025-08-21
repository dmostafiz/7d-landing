export default function HiddenSectionSixSliderNav({ isVisible }) {
  return (
    <div
      className={`hidden-section fullSection noBorder radius0 none c-section c-wrapper section-w0zFkSBDrG ${
        isVisible ? "shown" : ""
      }`}
      style={{}}
      id="section-w0zFkSBDrG"
    >
      <div className="inner">
        <div
          className="row-align-center noBorder radius0 none c-row c-wrapper row-tpdv-w1FdG"
          id="row-tpdv-w1FdG"
        >
          <div className="inner">
            <div
              className="noBorder radius0 none c-column c-wrapper col-Oc2_QT-MoJ"
              id="col-Oc2_QT-MoJ"
            >
              <div className="horizontal inner">
                <div
                  id="button-FwRc8T-_3m"
                  className="c-button c-wrapper button-FwRc8T-_3m"
                >
                  <button
                    data-animation-class=""
                    id="button-FwRc8T-_3m_btn"
                    style={{}}
                    className="cbutton-FwRc8T-_3m prevBtn custom btn-vp btn-hp  noBorder radius0 none"
                    aria-label="Previous "
                  >
                    <div style={{}} className="main-heading-group">
                      <div className="button-icon-start" />
                      <div className="main-heading-button">Previous</div>
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
                  id="button-6R8hTruTm_"
                  className="c-button c-wrapper button-6R8hTruTm_"
                >
                  <button
                    data-animation-class=""
                    id="button-6R8hTruTm__btn"
                    style={{}}
                    className="cbutton-6R8hTruTm_ nextBtn custom btn-vp btn-hp  noBorder radius0 none"
                    aria-label="Next "
                  >
                    <div style={{}} className="main-heading-group">
                      <div className="button-icon-start" />
                      <div className="main-heading-button">Next</div>
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
  );
}
