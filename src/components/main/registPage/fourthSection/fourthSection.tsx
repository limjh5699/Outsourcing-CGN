import { useEffect, useRef } from "react";
import styles from "./fourthSection.module.css";

const FourthSection = ({ setViewSection }: any) => {
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
          height = 112;
        } else if (window.innerWidth >= 767) {
          height = 160;
        } else if (window.innerWidth >= 479) {
          height = 144;
        } else {
          height = 128;
        }

        if (top <= height && bottom >= height) {
          setViewSection("fourthSection");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.background} id="fourthSection" ref={ref}>
      <div className={styles.contents}>
        <div className={styles.top}>
          <p className={styles.title}>[무료3] 신학 하는 요즘 애들 모여라!</p>
        </div>
        <div className={styles.mid}>
          <h1>신학생 인증하기</h1>
          <p>
            한국교회와 미래세대 목회자 섬김의 의미로 신학교를{" "}
            {window.innerWidth <= 767 ? <br /> : ""} 다니는 신학생들을
            {window.innerWidth > 767 ? <br /> : ""}
            [FMC 2023]에 무료로 초청합니다
          </p>
          <table>
            <tbody>
              <tr>
                <td width={window.innerWidth <= 767 ? "28%" : "23%"}>
                  가입 대상
                </td>
                <td>국내/외 신학교를 재학중인 대학생</td>
              </tr>
              <tr>
                <td width={window.innerWidth <= 767 ? "28%" : "23%"}>
                  가입 기간
                </td>
                <td>2023년 4월 1일 ~ 5월 21일</td>
              </tr>
              <tr>
                <td width={window.innerWidth <= 767 ? "28%" : "23%"}>
                  가입 방법
                </td>
                <td>퐁당 미디어 콘퍼런스 카카오채널로 학생증 인증</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.bottom}>
          <button onClick={() => onClickLitener()}>
            FMC 2023 카카오채널 바로가기
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
