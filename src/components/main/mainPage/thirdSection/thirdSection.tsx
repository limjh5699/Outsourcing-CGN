import styles from "./thirdSection.module.css";

import human1 from "../../../../assets/mainPage/human1.png";
import human2 from "../../../../assets/mainPage/human2.png";
import human3 from "../../../../assets/mainPage/human3.png";
import human4 from "../../../../assets/mainPage/human4.png";

import useScrollFadeIn from "../../../../hooks/useScrollFadeIn";
import ThirdSwiper from "./Swiper/swiper";

const ThirdSection = () => {
  const animatedItem = {
    0: useScrollFadeIn({ direction: "up", duration: 1, delay: 0 }),
  };

  return (
    <div className={styles.background}>
      <span>FMC 2023</span>
      <div className={styles.contents}>
        <div className={styles.text}>
          <h1 className={styles.title}>메인강사</h1>
          <p className={styles.subTitle}>
            다양한 분야의 전문가들의 경험과 노하우를 확인해 보세요.
          </p>
        </div>
        <div className={styles.cards} {...animatedItem[0]}>
          <div className={styles.swiper}>
            <ThirdSwiper />
          </div>
          <div className={styles.card}>
            <img className={styles.img} src={human1} alt={"이재훈"} />
            <div className={styles.info}>
              <h1 className={styles.title}>
                AI 시대의 목회와
                <br />
                4C전략
              </h1>
              <p className={styles.name}>이재훈 목사</p>
              <p className={styles.company}>온누리 교회</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img} src={human2} alt={"김경훈"} />
            <div className={styles.info}>
              <h1 className={styles.title}>
                미디어 전망,
                <br />
                그리고 퐁당
              </h1>
              <p className={styles.name}>김경훈 사장</p>
              <p className={styles.company}>구글 코리아</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img} src={human3} alt={"데이비드"} />
            <div className={styles.info}>
              <h1 className={styles.title}>
                AI, 미래 사회
                <br />
                그리고 기독교 전망
              </h1>
              <p className={styles.name}>데이비드 전 대표</p>
              <p className={styles.company}>디엡랩</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img} src={human4} alt={"바비 그룬왈드"} />
            <div className={styles.info}>
              <h1 className={styles.title}>
                4C 및 온라인 교회
                <br />
                활용 사례
              </h1>
              <p className={styles.name}>바비 그룬왈드 목사</p>
              <p className={styles.company}>라이프처치/유버전성경</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
