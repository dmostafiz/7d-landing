export default function HiddenSectionEleven({ isVisible }) {
  return (
    <div
      className={`sliding-text-section hidden-section fullSection noBorder radius0 none c-section c-wrapper section-8UArTG8_c7 ${
        isVisible ? "shown" : ""
      }`}
      style={{}}
      id="section-8UArTG8_c7"
    >
      <div className="inner">
        <div
          className="row-align-center noBorder radius0 none c-row c-wrapper row-nksvfcQPo7"
          id="row-nksvfcQPo7"
        >
          <div className="inner">
            <div
              className="noBorder radius0 none c-column c-wrapper col-LrX3dKOwOi"
              id="col-LrX3dKOwOi"
            >
              <div className="vertical inner">
                <div
                  id="custom-code-Jt-uDocdIA"
                  className="c-custom-code c-wrapper custom-code-Jt-uDocdIA"
                >
                  <div
                    id="custom-code-Jt-uDocdIA"
                    className="custom-code-container ccustom-code-Jt-uDocdIA"
                  >
                    <div className="marquee-wrapper-new">
                      <div
                        className="marquee-new"
                        style={{ transform: "translateX(-1451px)" }}
                      >
                        <span className="item-new">THE NEW WAY</span>
                        <span className="item-new alt-new">THE NEW WAY</span>
                        <span className="item-new">THE NEW WAY</span>
                        <span className="item-new alt-new">THE NEW WAY</span>
                        <span className="item-new">THE NEW WAY</span>
                        <span className="item-new alt-new">THE NEW WAY</span>
                        <span className="item-new">THE NEW WAY</span>
                        <span className="item-new alt-new">THE NEW WAY</span>
                        {/* Duplicate the items for continuous scrolling */}
                      </div>
                    </div>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ' \n  .marquee-wrapper-new { \n    overflow: hidden; \n    white-space: nowrap; \n    width: 100%; \n    position: relative; \n    left: 0; \n  } \n  \n  .marquee-new { \n    display: inline-block; \n    white-space: nowrap; \n    transition: transform 0.1s linear; \n  } \n  \n  .item-new { \n    display: inline-block; \n    padding: 0 20px; \n    font-size: 46px; \n    color: #fff; \n    font-family: "Akira Expanded"!important; \n    font-weight: 600; \n  } \n  \n  @media only screen and (max-width: 767px) { \n    .item-new { \n      font-size: 24px; \n    } \n  } \n  \n  .item-new.alt-new { \n    padding: 0 0 2px 0!important; \n    font-family: "Akira Expanded Outline"!important; \n    color: #fff!important; \n  } \n',
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
