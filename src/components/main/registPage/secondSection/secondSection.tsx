import styles from "./secondSection.module.css";

const SecondSection = () => {
  return (
    <div className={styles.background}>
      <div className={styles.chatBox}>무료로 참여하는 방법 알아보기</div>
      <div className={styles.topBar}>
        <div className={styles.selectedBox}>
          <p>
            퐁당 네트워크
            <br />
            교회 가입
          </p>
        </div>
        <div className={styles.border}></div>
        <div className={styles.box}>
          <p>
            개인
            <br />
            참가자 등록
          </p>
        </div>
        <div className={styles.border}></div>
        <div className={styles.box}>
          <p>신학생 인증</p>
        </div>
        <div className={styles.border}></div>
        <div className={styles.box}>
          <p>
            퐁당 네트워크
            <br />
            교회 인증
          </p>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.top}>
          <p className={styles.title}>[무료1] 퐁당과 함께해요</p>
        </div>
        <div className={styles.mid}>
          <h1>퐁당 네트워크 교회 가입하기</h1>
          <p>
            퐁당을 우리교회 플랫폼으로 사용하는 교회로 신청하는
            <br />
            최대한 2인까지 무료로 [FMC 2023] 을 참여하실 수 있습니다.
          </p>
          <table>
            <tbody>
              <tr>
                <td width={"23%"}>가입 대상</td>
                <td>국내/외 교회</td>
              </tr>
              <tr>
                <td width={"23%"}>가입 기간</td>
                <td>2023년 4월 10일 ~ 5월 21일</td>
              </tr>
              <tr>
                <td width={"23%"}>가입 방법</td>
                <td>퐁당 네트워크 교회 가입 신청서 작성</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.bottom}>
          <button>퐁당 네트워크 교회 가입 신청서 작성</button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
