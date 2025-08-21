export default function HiddenSectionNine({ isVisible }) {
  return (
    <div
      className={`sliding-text-section hidden-section fullSection noBorder radius0 none c-section c-wrapper section-qvAUpThG3O ${
        isVisible ? "shown" : ""
      }`}
      style={{}}
      id="section-qvAUpThG3O"
    >
      <div className="inner">
        <div
          className="row-align-center noBorder radius0 none c-row c-wrapper row-Ua5_kjziKd"
          id="row-Ua5_kjziKd"
        >
          <div className="inner">
            <div
              className="noBorder radius0 none c-column c-wrapper col-hCuxGYLV8a"
              id="col-hCuxGYLV8a"
            >
              <div className="vertical inner">
                <div
                  id="custom-code-mgsdtr5-wx"
                  className="c-custom-code c-wrapper custom-code-mgsdtr5-wx"
                >
                  <div
                    id="custom-code-mgsdtr5-wx"
                    className="custom-code-container ccustom-code-mgsdtr5-wx"
                  >
                    <div className="marquee-wrapper">
                      <div
                        className="marquee"
                        style={{ transform: "translateX(-823px)" }}
                      >
                        <span className="marquee-item">THE OLD WAY</span>
                        <span className="marquee-item alt">THE OLD WAY</span>
                        <span className="marquee-item">THE OLD WAY</span>
                        <span className="marquee-item alt">THE OLD WAY</span>
                        <span className="marquee-item">THE OLD WAY</span>
                        <span className="marquee-item alt">THE OLD WAY</span>
                        <span className="marquee-item">THE OLD WAY</span>
                        <span className="marquee-item alt">THE OLD WAY</span>
                        {/* Duplicate the items for continuous scrolling */}
                      </div>
                    </div>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n  .marquee-wrapper {\n    overflow: hidden;\n    white-space: nowrap;\n    width: 100%;\n    position: relative;\n    left: 0;\n  }\n  \n  .marquee {\n    display: inline-block;\n    white-space: nowrap;\n    transition: transform 0.1s linear;\n  }\n  \n  .marquee-item {\n    display: inline-block;\n    padding: 0 20px;\n    font-size: 46px;\n    color: #fff;\n    font-family: "Akira Expanded"!important;\n    font-weight: 600;\n  }\n  \n  @media only screen and (max-width: 767px) {\n    .marquee-item {\n      font-size: 24px;\n    }\n  }\n  \n  .marquee-item.alt {\n    padding: 0 0 2px 0!important;\n    font-family: "Akira Expanded Outline"!important;\n    color: #fff!important;\n  }\n',
                      }}
                    />
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
