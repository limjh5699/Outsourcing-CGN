import styles from "./firstSection.module.css";

const FirstSection = () => {
  return (
    <section id="firstSection" className={styles.background}>
      <div className={styles.title}>
        <h1>참가 신청</h1>
      </div>
      <div className={styles.contents}>
        <h2>
          [FMC 2023]을 참여하는 4가지 방법 <br />
          지금 바로 참가 신청하세요!
        </h2>
        <p className={styles.day}>
          온라인 사전 신청 기간 | 2023년 4월 1일 ~ 5월 21일
        </p>
        <div className={styles.box}>
          <div className={styles.box1}>
            <p>
              개인별
              <br />
              등록
            </p>
            <p className={styles.price}>30,000원</p>
          </div>
          <div className={styles.dashes}></div>
          <div className={styles.box2}>
            <p>
              당일 현장
              <br />
              등록
            </p>
            <p className={styles.price}>40,000원</p>
          </div>
          <div className={styles.dashes}></div>
          <div className={styles.box3}>
            <p>
              온라인
              <br />
              사전 참가등록
            </p>
            <p className={styles.price}>무료</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
