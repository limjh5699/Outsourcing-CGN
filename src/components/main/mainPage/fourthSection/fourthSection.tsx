import styles from "./fourthSection.module.css";

import balloon from "../../../../assets/mainPage/balloon.png";
import stamp from "../../../../assets/mainPage/stamp.png";
import chat from "../../../../assets/mainPage/chat.png";
import clover from "../../../../assets/mainPage/clover.png";

const FourthSection = () => {
  return (
    <div className={styles.background}>
      <span>FMC 2023</span>
      <div className={styles.contents}>
        <div className={styles.text}>
          <h1 className={styles.title}>이벤트</h1>
          <p className={styles.subTitle}>
            이벤트에 참여하시고 푸짐한 선물도 받아가세요
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.top}>
            <img src={balloon} alt="balloon" />
            <h1>퐁당 미디어 콘퍼런스 100% 즐기기</h1>
            <img src={balloon} alt="balloon" />
          </div>
          <div className={styles.mid}>
            <p>
              5/29 당일 현장에서 다양한 이벤트가 진행됩니다! <br />꼭 참여하셔서
              푸짐한 상품도 받아 가세요!
            </p>
            <div className={styles.gift}></div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.rectangle}>
              <img src={stamp} alt="stamp" />
              <p>
                엑스포 <br />
                스탬프 투어
              </p>
            </div>
            <div className={styles.rectangle}>
              <img src={chat} alt="chat" />
              <p>
                SNS <br />
                해시태그
              </p>
            </div>
            <div className={styles.rectangle}>
              <img src={clover} alt="clover" />
              <p>
                행운권
                <br />
                추첨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
