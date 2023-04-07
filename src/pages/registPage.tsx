import { useEffect, useState } from "react";

import FifthSection from "../components/main/registPage/fifthSection/fifthSection";
import FirstSection from "../components/main/registPage/firstSection/firstSection";
import FourthSection from "../components/main/registPage/fourthSection/fourthSection";
import SecondSection from "../components/main/registPage/secondSection/secondSection";
import ThirdSection from "../components/main/registPage/thirdSection/thirdSection";

const RegistPage = () => {
  const [viewSection, setViewSection] = useState("firstSection");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash) as HTMLElement;
      if (section) {
        const offsetTop = section.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <div>
      <FirstSection />
      <SecondSection
        viewSection={viewSection}
        setViewSection={setViewSection}
      />
      <ThirdSection setViewSection={setViewSection} />
      <FourthSection setViewSection={setViewSection} />
      <FifthSection setViewSection={setViewSection} />
    </div>
  );
};

export default RegistPage;
