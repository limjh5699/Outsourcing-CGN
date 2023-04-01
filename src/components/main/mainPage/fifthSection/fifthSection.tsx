import { useEffect } from "react";
import useScrollFadeIn from "../../../../hooks/useScrollFadeIn";
import styles from "./fifthSection.module.css";

const { kakao }: any = window;

const FifthSection = () => {
  const animatedItem = {
    0: useScrollFadeIn({ direction: "up", duration: 1, delay: 0 }),
    1: useScrollFadeIn({ direction: "up", duration: 1, delay: 0 }),
  };

  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.46624030654503, 127.03276428109496),
      level: 3,
    };

    let markerPosition = new kakao.maps.LatLng(
      37.46624030654503,
      127.03276428109496
    );

    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    let map = new kakao.maps.Map(container, options);

    marker.setMap(map);
  });

  return (
    <div className={styles.background}>
      <span>FMC 2023</span>
      <div className={styles.text}>
        <h1 className={styles.title}>찾아 오시는 길</h1>
      </div>
      <div className={styles.contents}>
        <div className={styles.mapArea}>
          <div {...animatedItem[0]}>
            <p>서울 서초구 바우뫼르 12길 70 더케이호텔서울 그랜드볼룸홀</p>
          </div>
          <div id="map" className={styles.map} {...animatedItem[1]}></div>
        </div>
        <div className={styles.traffic}>
          <div className={styles.trail}>
            <h2>지하철</h2>
            <p>
              신분당선 양재시민의숲역 5번 출구(도보 5분) <br />
              3호선 양재역 9번 출구 (서초예술문화회관 앞 셔틀버스 이용)
            </p>
          </div>
          <div className={styles.bus}>
            <h2>버스</h2>
            <ul className={styles.container}>
              <div className={styles.one}>
                <li>
                  일반 간선버스(파랑)
                  <br />
                  405, 421, 140, 470, 441
                  <br />
                  양재꽃시장 정류장 하차(도보10분)
                </li>
              </div>
              <div className={styles.two}>
                <li>
                  마을버스(08번, 20번)
                  <br />
                  3호선 양재역 11번 출구
                  <br />
                  버스 승차후 호텔 후문 하차
                </li>
              </div>
            </ul>
          </div>
          <div className={styles.parking}>
            <h2>주차</h2>
            <p>
              모든 행사에 참석하시는 차량은 한대당 당일에 한하여 3,000원 입니다.
              <br />
              1일(0시~24시 기준)이 초과할 경우 10분당 500원의 요금이 부과됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
