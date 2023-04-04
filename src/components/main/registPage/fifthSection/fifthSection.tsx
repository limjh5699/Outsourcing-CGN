import styles from "./fifthSection.module.css";

const FifthSection = () => {
  return (
    <section className={styles.background} id="fifthSection">
      <div className={styles.contents}>
        <div className={styles.top}>
          <p className={styles.title}>[무료4] 우리 교회는 퐁당 네트워크 교회</p>
        </div>
        <div className={styles.mid}>
          <h1>퐁당 네트워크 교회 인증하기</h1>
          <p>
            현재 퐁당 네트워크에 이미 가입된 교회는
            <br />
            참가 신청서만 작성해주시면
            <br />
            [FMC 2023]에 무료로 참가하실 수 있습니다.
          </p>
        </div>
        <div className={styles.bottom}>
          <button>퐁당 네트워크 교회 인증하기</button>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
