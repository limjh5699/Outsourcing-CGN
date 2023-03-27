import styles from "./secondSection.module.css";

import Marquee from "react-fast-marquee";

const SecondSection = () => {
  return (
    <div className={styles.background}>
      <div className={styles.top}>
        <span>FMC 2023</span>
      </div>
      <div className={styles.middle}>
        <p className={styles.text1}>이제는 AI시대, 교회의 미디어 솔루션은 ?</p>
        <p className={styles.text2}>
          Contents는 Cloud에서 Care은 Community 에서
        </p>
        <p className={styles.text3}>
          이제 교회는 새로운 시대에 맞는 새로운 미디어 전략이 필요합니다. <br />
          복음을 전하고 성도를 목양하는 새로운 방법을 공개합니다. <br />
          한국 교회를 섬기는 퐁당이 함께합니다.
        </p>
      </div>
      <div className={styles.bottom}>
        <Marquee
          style={{
            height: "100%",
            color: "#6565FA",
            fontSize: "2rem",
            fontWeight: "400",
          }}
          gradient={false}
        >
          fondant Media Conference 2023 &nbsp; fondant Media Conference 2023
          &nbsp; fondant Media Conference 2023 &nbsp; fondant Media Conference
          2023 &nbsp; fondant Media Conference 2023 &nbsp;
        </Marquee>
      </div>
    </div>
  );
};

export default SecondSection;
