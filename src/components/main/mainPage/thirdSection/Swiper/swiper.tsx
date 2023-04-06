import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

import styles from "./swiper.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import lecturer1 from "../../../../../assets/mainPage/lecturer1.png";
import lecturer2 from "../../../../../assets/mainPage/lecturer2.png";
import lecturer3 from "../../../../../assets/mainPage/lecturer3.png";
import lecturer4 from "../../../../../assets/mainPage/lecturer4.png";

const ThirdSwiper = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      breakpoints={{
        930: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1800: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.card}>
          <img className={styles.img} src={lecturer1} alt={"이재훈"} />
          <div className={styles.info}>
            <h1 className={styles.title}>
              AI 시대의 목회와
              <br />
              4C전략
            </h1>
            <p className={styles.name}>이재훈 목사</p>
            <p className={styles.company}>온누리 교회</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.card}>
          <img className={styles.img} src={lecturer2} alt={"김경훈"} />
          <div className={styles.info}>
            <h1 className={styles.title}>
              미디어와
              <br />
              커뮤니케이션
            </h1>
            <p className={styles.name}>김경훈 사장</p>
            <p className={styles.company}>구글 코리아</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.card}>
          <img className={styles.img} src={lecturer3} alt={"데이비드"} />
          <div className={styles.info}>
            <h1 className={styles.title}>
              AI, 미래 사회
              <br />
              그리고 기독교 전망
            </h1>
            <p className={styles.name}>데이비드 전 대표</p>
            <p className={styles.company}>디엡랩</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.card}>
          <img className={styles.img} src={lecturer4} alt={"바비 그룬왈드"} />
          <div className={styles.info}>
            <h1 className={styles.title}>
              4C 및 온라인 교회
              <br />
              활용 사례
            </h1>
            <p className={styles.name}>바비 그룬왈드 목사</p>
            <p className={styles.company}>라이프처치/유버전성경</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ThirdSwiper;
