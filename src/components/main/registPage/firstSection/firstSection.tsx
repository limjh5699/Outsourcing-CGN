import styles from "./firstSection.module.css";

import rectangle from "../../../../assets/registPage/rectengle.png";

const FirstSection = () => {
  return (
    <section id="firstSection" className={styles.background}>
      <div className={styles.rectangle}>
        <img src={rectangle} alt="rectangle" />
      </div>
      <div className={styles.title}>
        <h1>참가 신청</h1>
      </div>
      <div className={styles.contents}>
        <h2>
          [FMC 2023]을 참여하는 {window.innerWidth <= 767 ? <br /> : ""} 4가지
          방법 <br />
          지금 바로 신청하세요!
        </h2>
        <p className={styles.day}>
          온라인 사전 신청 기간 {window.innerWidth <= 767 ? <br /> : "|"} 2023년
          4월 10일 (월) ~ 5월 21일 (일)
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
              온라인 사전
              <br />
              참가등록
            </p>
            <p className={styles.price}>무료</p>
          </div>
          <div className={styles.chatBox}>무료로 참여하는 방법 알아보기</div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
