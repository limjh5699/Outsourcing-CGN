import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import styles from "./thirdSection.module.css";

const ThirdSection = ({ setViewSection }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  function onClickLitener() {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSfkx0HXsqODLcBOGGuhdJ6WQygBdQk2_Ndr7-5dlES8kGtF-g/viewform";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();

        let height = 1;

        if (window.innerWidth >= 1023) {
          height = 113;
        } else if (window.innerWidth >= 767) {
          height = 160;
        } else if (window.innerWidth >= 479) {
          height = 145;
        } else {
          height = 128;
        }

        if (top <= height && bottom >= height) {
          setViewSection("thirdSection");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.background} id="thirdSection" ref={ref}>
      <div className={styles.contents}>
        <div className={styles.top}>
          <p className={styles.title}>[무료2] 나는 솔로</p>
        </div>
        <div className={styles.mid}>
          <h1>개인 참가자 신청하기</h1>
          <p>
            [FMC 2023]은 개인별로도 참가하실 수 있습니다 <br /> 단, 출석교회를
            퐁당 네트워크 교회로 가입시키면
            {window.innerWidth <= 767 ? <br /> : ""}
            무료로 참여하실 수 있습니다
          </p>
          <div className={styles.container}>
            <div className={styles.box}>
              <p>
                출석 교회를
                <br />
                퐁당 네트워크
                <br />
                교회로 가입
              </p>
              <Link to="secondSection">
                <div>무료</div>
              </Link>
            </div>
            <div className={styles.box}>
              <p>
                개인 참가자
                <br /> 등록
              </p>
              <span>30,000원</span>
            </div>
            <div className={styles.box}>
              <p>
                당일 현장
                <br /> 등록
              </p>
              <span>30,000원</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <button onClick={() => onClickLitener()}>
            개인 참가자 신청서 작성
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
