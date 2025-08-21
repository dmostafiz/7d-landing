import HiddenSectionEight from "./sections/HiddenSectionEight";
import HiddenSectionEleven from "./sections/HiddenSectionEleven";
import HiddenSectionFifteenFaqs from "./sections/HiddenSectionFifteenFaqs";
import HiddenSectionFiveSlider from "./sections/HiddenSectionFiveSlider";
import HiddenSectionFour from "./sections/HiddenSectionFour";
import HiddenSectionFourteen from "./sections/HiddenSectionFourteen";
import HiddenSectionNine from "./sections/HiddenSectionNine";
import HiddenSectionOne from "./sections/HiddenSectionOne";
import HiddenSectionSeven from "./sections/HiddenSectionSeven";
import HiddenSectionSixSliderNav from "./sections/HiddenSectionSixSliderNav";
import HiddenSectionTen from "./sections/HiddenSectionTen";
import HiddenSectionThirteen from "./sections/HiddenSectionThirteen";
import HiddenSectionThree from "./sections/HiddenSectionThree";
import HiddenSectionTwelve from "./sections/HiddenSectionTwelve";
import HiddenSectionTwo from "./sections/HiddenSectionTwo";

export default function HiddenSections({ isVisible }) {
  return (
    <>
      <HiddenSectionOne isVisible={isVisible} />

      <HiddenSectionTwo isVisible={isVisible} />

      <HiddenSectionThree isVisible={isVisible} />

      <HiddenSectionFour isVisible={isVisible} />

      <HiddenSectionFiveSlider isVisible={isVisible} />

      <HiddenSectionSixSliderNav isVisible={isVisible} />

      {/* <HiddenSectionSeven isVisible={isVisible} /> */}

      {/* <HiddenSectionEight isVisible={isVisible} /> */}

      {/* <HiddenSectionNine isVisible={isVisible} /> */}

      {/* <HiddenSectionTen isVisible={isVisible} /> */}

      {/* <HiddenSectionEleven isVisible={isVisible} /> */}

      {/* <HiddenSectionTwelve isVisible={isVisible} /> */}

      <HiddenSectionThirteen isVisible={isVisible} />

      <HiddenSectionFourteen />

      <HiddenSectionFifteenFaqs isVisible={isVisible} />
    </>
  );
}
