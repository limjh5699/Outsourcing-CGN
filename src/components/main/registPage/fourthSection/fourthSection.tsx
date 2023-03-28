import styles from "./fourthSection.module.css";

const FourthSection = () => {
  return (
    <div className={styles.background}>
      <div className={styles.contents}>
        <div className={styles.top}>
          <p className={styles.title}>[무료3] 산학 하는 요즘 애들 모여라!</p>
        </div>
        <div className={styles.mid}>
          <h1>산학생 인증하기</h1>
          <p>
            한국교회와 미래세대 목회자 섬김의 의미로 신학교를 다니는 신학생들을
            <br />
            [FMC 2023]에 무료로 초청합니다
          </p>
          <table>
            <tr>
              <td width={"23%"}>가입 대상</td>
              <td>국내/외 신학교를 재학중인 대학생</td>
            </tr>
            <tr>
              <td width={"23%"}>가입 기간</td>
              <td>2023년 4월 1일 ~ 5월 21일</td>
            </tr>
            <tr>
              <td width={"23%"}>가입 방법</td>
              <td>퐁당 미디어 콘퍼런스 카카오채널로 학생증 인증</td>
            </tr>
          </table>
        </div>
        <div className={styles.bottom}>
          <button>FMC 2023 카카오채널 바로가기</button>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
