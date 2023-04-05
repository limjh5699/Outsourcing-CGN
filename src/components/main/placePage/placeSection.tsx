import { useEffect } from "react";
import styles from "./placeSection.module.css";

import place1 from "../../../assets/placePage/place1.png";
import place2 from "../../../assets/placePage/place2.png";
import place3 from "../../../assets/placePage/place3.png";

const { kakao }: any = window;

const PlaceSection = () => {
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
      <div className={styles.title}>
        <h1>행사장</h1>
      </div>
      <div className={styles.contents}>
        <div className={styles.mapArea}>
          <p>
            서울 서초구 바우뫼르 12길 70{" "}
            {window.innerWidth <= 1023 ? <br /> : ""} 더케이호텔서울
            그랜드볼룸홀
          </p>
          <div id="map" className={styles.map}></div>
        </div>
        <div className={styles.traffic}>
          <div className={styles.trail}>
            <h2>🚇지하철</h2>
            <p>
              신분당선 양재시민의{window.innerWidth <= 1023 ? " " : "숲역"}
              5번 출구(도보 5분) <br />
              {window.innerWidth <= 1023 ? <br /> : ""}
              3호선 양재역 9번 출구{window.innerWidth <= 1023 ? (
                <br />
              ) : (
                ""
              )}{" "}
              (서초예술문화회관 앞 셔틀버스 이용)
            </p>
          </div>
          <div className={styles.bus}>
            <h2>🚌버스</h2>
            <ul className={styles.container}>
              <div className={styles.one}>
                <p>
                  일반 간선버스(파랑)
                  <br />
                  405, 421, 140, 470, 441{" "}
                  {window.innerWidth <= 1023 ? <br /> : ""}
                  <br />
                  양재꽃시장 정류장 하차
                  {window.innerWidth <= 1023 ? <br /> : ""}(도보10분)
                </p>
              </div>
              <div className={styles.two}>
                <p>
                  마을버스(08번, 20번)
                  <br />
                  {window.innerWidth <= 1023 ? <br /> : ""}
                  3호선 양재역 11번 출구
                  <br />
                  버스 승차후 호텔 후문 하차
                </p>
              </div>
            </ul>
          </div>
          <div className={styles.parking}>
            <h2>🅿주차</h2>
            <p>
              모든 행사에 참석하시는 차량은 한대당 당일에 한하여 3,000원 입니다.
              <br />
              {window.innerWidth <= 1023 ? <br /> : ""}
              1일(0시~24시 기준)이 초과할 경우 10분당 500원의 요금이 부과됩니다.
            </p>
          </div>
        </div>
        <div className={styles.imgSection}>
          <img src={place1} alt="첫번째 장소" />
          <img src={place2} alt="두번째 장소" />
          <img src={place3} alt="세번째 장소" />
        </div>
      </div>
    </div>
  );
};

export default PlaceSection;
