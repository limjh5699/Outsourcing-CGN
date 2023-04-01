import styles from "./event.module.css";

import fireworks from "../../../assets/eventPage/fireworks.png";
import map from "../../../assets/eventPage/mapImg.png";
import stamp from "../../../assets/eventPage/stamp.png";
import chat from "../../../assets/eventPage/chat.png";
import clover from "../../../assets/eventPage/clover.png";

const Event = () => {
  return (
    <div className={styles.background}>
      <div className={styles.title}>
        <h1>이벤트</h1>
      </div>
      <div className={styles.contents}>
        <div className={styles.box1}>
          <div className={styles.textBox}>
            <img src={fireworks} alt="폭죽" />
            <h1>[현장 이벤트] 현장에서 즐기세요!</h1>
            <img src={fireworks} alt="폭죽" />
          </div>
          <p>
            5/29 당일 현장에 다양한 이벤트가 진행됩니다!
            <br />꼭 참여하셔서 푸짐한 상품도 받아가세요!
          </p>
          <img src={map} alt="맵" className={styles.mapImg} />
        </div>
        <div className={styles.box2}>
          <img src={stamp} alt="스탬프" />
          <h1>엑스포 스탬프 투어 이벤트</h1>
          <table>
            <tbody>
              <tr>
                <td>참여 방법</td>
                <td>
                  현장에 있는 엑스포 부스를 방문하여 스탬프를 모아주세요!
                  <br />
                  12개 이상 방문하신 분 중 추첨을 통해 선물을 드립니다
                </td>
              </tr>
              <tr>
                <td>당첨자 발표</td>
                <td>2023년 5월 29일 현장에서 발표됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.box3}>
          <img src={chat} alt="체팅" />
          <h1>SNS 해시태그 이벤트</h1>
          <table>
            <tbody>
              <tr>
                <td>참여 방법</td>
                <td>
                  현장에서 찍은 다양한 사진을 SNS에 업로드 하신 후
                  <br />
                  필수 해시태그 #FMC2023 #퐁당 #CGN을 입력해주세요
                </td>
              </tr>
              <tr>
                <td>당첨자 발표</td>
                <td>2023년 5월 29일 현장에서 발표됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.box4}>
          <img src={clover} alt="클로버" />
          <h1>행운권 추첨 이벤트</h1>
          <table>
            <tbody>
              <tr>
                <td>참여 방법</td>
                <td>
                  현장에 참여한 모든 사람들 대상으로 행운권을 추첨합니다
                  <br />
                  명찰에 들어있는 번호를 꼭 확인해 주세요!
                </td>
              </tr>
              <tr>
                <td>당첨자 발표</td>
                <td>2023년 5월 29일 현장에서 발표됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Event;
