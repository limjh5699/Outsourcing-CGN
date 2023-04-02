import { useState } from "react";

import styles from "./FAQ.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const [topActive, setTopActive] = useState(0);
  const [indexActive, setIndexActive] = useState<number>(-1);

  const datas = [
    {
      title: "참가 신청",
      subTitle: "참가 신청은 어떻게 하나요 ?",
      content: `
      참가신청 3월 20일 (월) ~ 5월 26일(금)
      FMC 2023(퐁당 미디어 콘퍼런스) 웹사이트에서 할 수 있습니다.
      참가 신청 페이지에 접속한 후 3가지 방법 중 하나를 선택하셔서 신청해 주세요.
      1. 퐁당 교회 네트워크 신청
      2.신학생 인증
      3.개별 참가
      3가지의 방법 마다 신청 방법이 다르니
      참가 신청 페이지를 참고해주시기 바랍니다.
      `,
    },
    {
      title: "참가 신청",
      subTitle: "참가 신청은 유료인가요?",
      content: "",
    },
    {
      title: "참가 신청",
      subTitle: "신학생 인증은 어떻게 하나요?",
      content: "",
    },
    {
      title: "참가 신청",
      subTitle: "참가 신청을 했는지 확인할 수 있나요?",
      content: "",
    },
    {
      title: "참가 신청",
      subTitle: "현장에서도 참가 신청을 할 수 있나요 ?",
      content: "",
    },
    {
      title: "참가 신청",
      subTitle: "참가를 신청했지만 갈 수 없게 되었습니다. 어떻게 해야 하나요?",
      content: "",
    },
    {
      title: "참가 신청",
      subTitle: "강연 시작 시간에 도착하지 못해도 들어갈 수 있나요?",
      content: "",
    },
    {
      title: "참가 신청",
      subTitle:
        "온라인 참가 신청 기간이 지났다고 나오는데 추가 신청할 수 있나요?",
      content: "",
    },
  ];

  return (
    <div className={styles.background}>
      <div className={styles.title}>
        <h1>자주 묻는 질문</h1>
      </div>
      <div className={styles.contents}>
        <div className={styles.topBar}>
          <button
            className={topActive === 0 ? styles.topActive : null}
            onClick={() => setTopActive(0)}
          >
            참가 신청
          </button>
          <button
            className={topActive === 1 ? styles.topActive : null}
            onClick={() => setTopActive(1)}
          >
            행사 / 강연
          </button>
          <button
            className={topActive === 2 ? styles.topActive : null}
            onClick={() => setTopActive(2)}
          >
            퐁당 교회 네트워크
          </button>
          <button
            className={topActive === 3 ? styles.topActive : null}
            onClick={() => setTopActive(3)}
          >
            기타
          </button>
        </div>
        <div className={styles.faq}>
          {datas.map((data, index) => (
            <div key={index} className={styles.container}>
              <div
                className={styles.table}
                onClick={() => {
                  indexActive === index
                    ? setIndexActive(-1)
                    : setIndexActive(index);
                }}
              >
                <div className={styles.tableTitle}>{data.title}</div>
                <div className={styles.tableSubTitle}>{data.subTitle}</div>
                {indexActive === index ? (
                  <FontAwesomeIcon className={styles.icon} icon={faMinus} />
                ) : (
                  <FontAwesomeIcon className={styles.icon} icon={faPlus} />
                )}
              </div>
              <div
                className={
                  indexActive === index ? styles.contentSection : styles.close
                }
              >
                <pre>{data.content}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
