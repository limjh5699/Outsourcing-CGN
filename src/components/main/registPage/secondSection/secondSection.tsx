import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

import styles from "./secondSection.module.css";

const SecondSection = ({ viewSection, setViewSection }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const [scrollEvent, setScrollEvent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const height = window.innerWidth <= 1023 ? 63 : 0;
        let height2 = 1;

        if (window.innerWidth >= 1023) {
          height2 = 115;
        } else if (window.innerWidth >= 767) {
          height2 = 160;
        } else if (window.innerWidth >= 479) {
          height2 = 145;
        } else {
          height2 = 130;
        }

        if (top < height) {
          setScrollEvent(true);
        } else {
          setScrollEvent(false);
        }

        if ((top <= 0 && bottom >= height2) || top > 0) {
          setViewSection("secondSection");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function onClickLitener() {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSfkx0HXsqODLcBOGGuhdJ6WQygBdQk2_Ndr7-5dlES8kGtF-g/viewform";
  }

  return (
    <section className={styles.background} id="secondSection" ref={ref}>
      <div className={scrollEvent ? styles.scrollTopBar : styles.topBar}>
        <Link
          to="secondSection"
          className={styles.box}
          style={
            viewSection === "firstSection" || viewSection === "secondSection"
              ? { backgroundColor: "#6045e4" }
              : {}
          }
        >
          <p>
            퐁당 네트워크
            <br />
            교회 가입
          </p>
        </Link>
        {window.innerWidth <= 479 ? "" : <div className={styles.border}></div>}
        <Link
          to="thirdSection"
          className={styles.box}
          style={
            viewSection === "thirdSection" ? { backgroundColor: "#5ae676" } : {}
          }
        >
          <p>
            개인
            <br />
            참가자 등록
          </p>
        </Link>
        {window.innerWidth <= 479 ? "" : <div className={styles.border}></div>}
        <Link
          to="fourthSection"
          className={styles.box}
          style={
            viewSection === "fourthSection"
              ? { backgroundColor: "#011633" }
              : {}
          }
        >
          <p>신학생 인증</p>
        </Link>
        {window.innerWidth <= 479 ? "" : <div className={styles.border}></div>}
        <Link
          to="fifthSection"
          className={styles.box}
          style={
            viewSection === "fifthSection" ? { backgroundColor: "#5ae676" } : {}
          }
        >
          <p>
            퐁당 네트워크
            <br />
            교회 인증
          </p>
        </Link>
      </div>
      <div className={styles.contents}>
        <div className={styles.top}>
          <p className={styles.title}>[무료1] 퐁당과 함께해요</p>
        </div>
        <div className={styles.mid}>
          <h1>퐁당 네트워크 교회 가입하기</h1>
          <p>
            퐁당을 우리교회 플랫폼으로 사용하는 교회로{" "}
            {window.innerWidth <= 767 ? <br /> : ""} 신청하는
            {window.innerWidth > 767 ? <br /> : ""}
            최대한 2인까지 무료로 {window.innerWidth <= 767 ? <br /> : ""}
            [FMC 2023] 을 참여하실 수 있습니다.
          </p>
          <table>
            <tbody>
              <tr>
                <td width={window.innerWidth <= 767 ? "28%" : "23%"}>
                  가입 대상
                </td>
                <td>국내/외 교회</td>
              </tr>
              <tr>
                <td width={window.innerWidth <= 767 ? "28%" : "23%"}>
                  가입 기간
                </td>
                <td>2023년 4월 10일 ~ 5월 21일</td>
              </tr>
              <tr>
                <td width={window.innerWidth <= 767 ? "28%" : "23%"}>
                  가입 방법
                </td>
                <td>퐁당 네트워크 교회 가입 신청서 작성</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.bottom}>
          <button onClick={() => onClickLitener()}>
            퐁당 네트워크 교회 가입 신청서 작성
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
