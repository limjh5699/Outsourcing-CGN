import { useEffect, useRef } from "react";
import styles from "./fifthSection.module.css";

const FifthSection = ({ setViewSection }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  function onClickLitener() {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSfkx0HXsqODLcBOGGuhdJ6WQygBdQk2_Ndr7-5dlES8kGtF-g/viewform";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        console.log(top, bottom);

        let height = 1;

        if (window.innerWidth >= 1023) {
          height = 112;
        } else if (window.innerWidth >= 767) {
          height = 160;
        } else if (window.innerWidth >= 479) {
          height = 145;
        } else {
          height = 128;
        }

        if (top <= height && bottom >= height) {
          setViewSection("fifthSection");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.background} id="fifthSection" ref={ref}>
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
          <button onClick={() => onClickLitener()}>
            퐁당 네트워크 교회 인증하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
