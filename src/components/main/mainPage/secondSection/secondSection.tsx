import Marquee from "react-fast-marquee";

import styles from "./secondSection.module.css";

import useScrollFadeIn from "../../../../hooks/useScrollFadeIn";

const SecondSection = () => {
  const animatedItem = {
    0: useScrollFadeIn({ direction: "up", duration: 1, delay: 0 }),
    1: useScrollFadeIn({ direction: "up", duration: 1, delay: 0 }),
    2: useScrollFadeIn({ direction: "up", duration: 1, delay: 0 }),
  };

  return (
    <section className={styles.background}>
      <div className={styles.top}>
        <span>FMC 2023</span>
      </div>
      <div className={styles.middle}>
        <div {...animatedItem[0]}>
          <p className={styles.text1}>
            이제는 AI시대, 교회의 미디어 솔루션은 ?
          </p>
        </div>
        <div {...animatedItem[1]}>
          <p className={styles.text2}>
            Contents는 Cloud에서 {window.innerWidth <= 530 ? <br /> : ""} Care은
            Community 에서
          </p>
        </div>
        <div {...animatedItem[2]}>
          <p className={styles.text3}>
            이제 교회는 새로운 시대에 맞는 새로운 미디어 전략이 필요합니다.{" "}
            <br />
            복음을 전하고 성도를 목양하는 새로운 방법을 공개합니다. <br />
            한국 교회를 섬기는 퐁당이 함께합니다.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <Marquee className={styles.marquee} gradient={false}>
          fondant Media Conference 2023 &nbsp; fondant Media Conference 2023
          &nbsp; fondant Media Conference 2023 &nbsp; fondant Media Conference
          2023 &nbsp; fondant Media Conference 2023 &nbsp;
        </Marquee>
      </div>
    </section>
  );
};

export default SecondSection;
