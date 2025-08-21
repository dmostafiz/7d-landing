import ExternalCDN from "./componetns/ExternalCDN";
import NavMenu from "./componetns/NavMenu";
import Footer from "./componetns/Footer";
import AllSections from "./componetns/sections/AllSections";

export default function App() {
  return (
    <>
      <div>
        <div className="bgCover bg-fixed" />
        <div>
          <div>
            <NavMenu />
            <div
              id="preview-container"
              className="preview-container hl_page-preview--content"
            >
              <div>
                <AllSections />
                <Footer />
              </div>
            </div>
            <div>
              <div id="ft-track-hl-custom-code">
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      " \n   /* Basic styling for both desktop and mobile slider containers */ \n   .slider, .slider-mobile { \n     overflow: hidden; /* Hide overflowing content */ \n     width: 100%; /* Adjust to fit your design */ \n     position: relative; /* Required for absolute positioning of slides */ \n   } \n  \n   /* Styling for each slide on both desktop and mobile */ \n   .slide, .slide-mobile { \n     width: 100%; /* Adjust slide width */ \n     display: none; /* Hide all slides initially */ \n     position: relative; /* Position them absolutely within the slider */ \n     padding-top: 0 !important; \n     padding-bottom: 0 !important; \n   } \n  \n   /* Right column height adjustments */ \n   .slide-right-col, .slide-right-col-mobile { \n     min-height: 600px !important; \n   } \n    \n   /* Media query for mobile-specific height adjustments */ \n   @media only screen and (max-width: 767px) {  \n     .slide-right-col, .slide-right-col-mobile { \n       min-height: 500px !important; \n     } \n   } \n  \n   /* Show only the first slide initially for both desktop and mobile */ \n   .slide:first-child, .slide-mobile:first-child { \n     display: block; \n   } \n  \n   /* Button layout adjustments for mobile buttons */ \n   .btns-mobile .inner { \n     display: flex!important; \n     flex-direction: row!important; \n     justify-content: space-evenly!important; \n   } \n  \n /* Animation keyframes */ \n @keyframes fadeInFromBottom { \n   from { \n     opacity: 0; \n     transform: translateY(20px); \n   } \n   to { \n     opacity: 1; \n     transform: translateY(0); \n   } \n } \n  \n /* Apply animation to slides when they appear */ \n .slide, .slide-mobile { \n   animation: fadeInFromBottom 0.5s ease-in-out; \n } \n  \n ",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExternalCDN />
    </>
  );
}
