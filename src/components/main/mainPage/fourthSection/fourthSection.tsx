import styles from "./fourthSection.module.css";

import balloon from "../../../../assets/mainPage/balloon.png";
import stamp from "../../../../assets/mainPage/stamp.png";
import chat from "../../../../assets/mainPage/chat.png";
import clover from "../../../../assets/mainPage/clover.png";
import gift from "../../../../assets/mainPage/gift.png";

import useScrollFadeIn from "../../../../hooks/useScrollFadeIn";

const FourthSection = () => {
  const animatedItem = {
    0: useScrollFadeIn({ direction: "up", duration: 1, delay: 0 }),
    1: useScrollFadeIn({ direction: "up", duration: 1, delay: 0 }),
    2: useScrollFadeIn({ direction: "up", duration: 1, delay: 0 }),
    3: useScrollFadeIn({ direction: "up", duration: 1, delay: 0 }),
  };

  return (
    <div className={styles.background}>
      <span>FMC 2023</span>
      <div className={styles.text}>
        <h1 className={styles.title}>이벤트</h1>
        <p className={styles.subTitle}>
          이벤트에 참여하시고 푸짐한 선물도 받아가세요
        </p>
      </div>
      <div className={styles.contents}>
        <div className={styles.container}>
          <div className={styles.top} {...animatedItem[0]}>
            <h1>
              <img src={balloon} alt="balloon" />
              퐁당 미디어 콘퍼런스 {window.innerWidth <= 767 ? <br /> : ""}100%
              즐기기
              <img src={balloon} alt="balloon" />
            </h1>
          </div>
          <div className={styles.mid}>
            <div {...animatedItem[1]}>
              <p>
                5/29 당일 현장에서 {window.innerWidth <= 767 ? <br /> : ""}
                다양한 이벤트가 진행됩니다! <br />꼭 참여하셔서{" "}
                {window.innerWidth <= 767 ? <br /> : ""} 푸짐한 상품도 받아
                가세요!
              </p>
            </div>
            <div className={styles.gift} {...animatedItem[2]}>
              <img src={gift} alt="gift" />
            </div>
          </div>
          <div className={styles.bottom} {...animatedItem[3]}>
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
