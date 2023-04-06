import { useState } from "react";

import styles from "./FAQ.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const [topActive, setTopActive] = useState(0);
  const [indexActive, setIndexActive] = useState<number>(-1);

  const datas = [
    [
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
        content: `
FMC23은 개인별로 등록할 경우 3만원, 당일 현장 등록 시 4만원입니다. 
단, 온라인으로 사전 참가신청을 하면, 다음의 경우 무료입니다.
1. 퐁당네트워크 교회에 가입돼 있는 경우
2. 신학생(인증 필수)
3. 퐁당네트워크 교회에 신규 가입하는 경우
      `,
      },
      {
        title: "참가 신청",
        subTitle: "신학생 인증은 어떻게 하나요?",
        content: `
참가 신청 페이지에서 신학생 인증을 클릭하시고,
퐁당 미디어 콘퍼런스 카카오 채널 통해 학생증 이미지를 보내주시면 인증이 완료 됩니다.
      `,
      },
      {
        title: "참가 신청",
        subTitle: "참가 신청을 했는지 확인할 수 있나요?",
        content: `
사전 신청을 하시면 다음날 오전 전날 신청하신 분들을 대상으로 신청 완료 이메일이 발송됩니다. 
만약, 받지 못하셨다면 FMC2023 운영팀 이메일로 문의주세요. 
      `,
      },
      {
        title: "참가 신청",
        subTitle: "현장에서도 참가 신청을 할 수 있나요 ?",
        content: `
FMC23의 등록 인원은 500명으로 제한이 돼 있습니다. 
등록 인원 여석이 있을 경우 현장 참가 신청도 가능합니다.
사전 등록으로 정원이 마감될 경우 현장 등록이 불가합니다.
      `,
      },
      {
        title: "참가 신청",
        subTitle:
          "참가를 신청했지만 갈 수 없게 되었습니다. 어떻게 해야 하나요?",
        content: `
사전등록 기간인 5월 21일(일)까지 취소 신청을 해 주신 경우 환불 가능합니다.
등록비 혜택을 받으신 경우라도 꼭 사무국에 사전 연락 부탁드립니다. 
      `,
      },
      {
        title: "참가 신청",
        subTitle: "강연 시작 시간에 도착하지 못해도 들어갈 수 있나요?",
        content: `
현장 접수 시 착석 테이블 번호가 부여됩니다. 
강연 중간 중간에 휴식 시간이 있습니다.
휴식 시간에 자유로운 이동이 가능합니다.
      `,
      },
      {
        title: "참가 신청",
        subTitle:
          "온라인 참가 신청 기간이 지났다고 나오는데 추가 신청할 수 있나요?",
        content: `
온라인 참가 신청 기간이 끝난 경우 사전 등록은 불가합니다. 
여석이 있을 경우 현장에서 등록 안내 도와드리겠습니다.
      `,
      },
      {
        title: "참가 신청",
        subTitle:
          "콘퍼런스를 참석했다는 인증을 해야 합니다. 인증이 가능한가요?",
        content: `
콘퍼런스 등록증을 발급해 드립니다. 
      `,
      },
      {
        title: "참가 신청",
        subTitle: "신청 시 적군 제한이 있나요?",
        content: `
목회자부터 미디어 담당 사역자, 신학생, 일반 성도까지.
교회 미디어에 관심 있는 모든 분들의 참석이 가능합니다.
      `,
      },
    ],
    [
      {
        title: "행사/강연",
        subTitle: "언제 어디에서 진행하나요?",
        content: `
2023년 5월 29일(월), 양재더케이호텔 그랜드볼룸홀에서 진행합니다.
오전 9시부터 참가 등록을 시작하며, 10시부터 시작합니다.
        `,
      },
      {
        title: "행사/강연",
        subTitle: "행사는 온라인으로 생중계 되나요?",
        content: `
온라인 실시간 중계는 되지 않습니다.
        `,
      },
      {
        title: "행사/강연",
        subTitle: "강연자에게 질문을 따로 할 수 있습니까?",
        content: `
강의가 진행되는 동안 궁금하신 내용은 FMC23 공식 카카오톡 채널을 통해 질의하실 수 있습니다.
시간 관계상 질문 중 주최 측이 선별한 질문에 대해 답변하는 시간이 마련돼 있습니다. 
        `,
      },
      {
        title: "행사/강연",
        subTitle: "행사와 관련된 자료들을 받아볼 수 있나요?",
        content: `
등록하신 분들을 대상으로 자료집을 다운받을 수 있는 링크를 보내드립니다.
          `,
      },
      {
        title: "행사/강연",
        subTitle: "콘퍼런스 강연 내용을 나중에 다시 보거나 공유할 수 있나요?",
        content: `
추후 편집된 강의 영상이 퐁당을 통해 업로드 될 예정입니다.
        `,
      },
    ],
    [
      {
        title: "퐁당 네트워크 교회",
        subTitle: "퐁당이 무엇인가요?",
        content: `
퐁당(fondant)은 ‘흘러넘치다’ ‘빠져들다’라는 뜻의 프랑스어로 
온 세상으로 복음을 흘려보내는 기독OTT 플랫폼입니다.
간편한 가입 만으로 예배는 물론 말씀, 세미나, QT부터 기독영화, 애니메이션에 이르기까지 
다양한 기독 콘텐츠들을 무료로 보실 수 있습니다.
이단, 광고, 유해 콘텐츠 없이 검증된 양질의 복음 콘텐츠가 제공됩니다. 
퐁당의 AI 기술은 균형 잡힌 신앙 성장을 돕는 맞춤형 콘텐츠를 추천해드립니다. 
스마트 폰은 물론, 컴퓨터, 스마트TV를 통해서도 이용 가능합니다. 
        `,
      },
      {
        title: "퐁당 네트워크 교회",
        subTitle: "퐁당 교회 네트워크에 가입하고 싶습니다. 어떻게 해야 하나요?",
        content: `
02-792-0691로 전화를 주시면 퐁당 교회 관리자 계정을 신청하실 수 있는 링크를 보내드립니다.
퐁당 앱 ‘마이페이지-문의하기-문의글 입력- 문의유형선택(교회신청문의)’를 통해서도 가능합니다. 
이메일로(fondant@cgnmail.net) 교회/단체 이름과 전화번호, 주소 등을 입력해주셔도 됩니다. 
        `,
      },
      {
        title: "퐁당 네트워크 교회",
        subTitle: "퐁당 교회 네트워크가 될 경우 혜택은 무엇이 있습니까?",
        content: `
퐁당에는 ‘교회별 페이지’가 있습니다. 
퐁당 교회에 가입할 경우 이 페이지를 무료로 사용할 수 있습니다.
이 페이지에서는 교회 상황에 맞는 성도 양육 커리큘럼 구성 및 학적 관리 기능이 제공됩니다.
또한 퐁당이 진행하는 정기적인 포럼과 콘퍼런스 등에 우선 참여하면서 
교회 미디어의 발전에 참여할 수 있습니다. 
        `,
      },
      {
        title: "퐁당 네트워크 교회",
        subTitle: "퐁당 교회 네트워크 가입은 유료인가요? ",
        content: `
무료입니다. 유해 환경 없는 퐁당 내 복음 콘텐츠들을 주변 사람들과 교회 공동체에 함께 공유해보세요. 
        `,
      },
    ],
    [
      {
        title: "기타",
        subTitle: "주차가 가능한가요?",
        content: `
모든 행사에 참석하시는 차량은 한대당 당일에 한하여 3,000원입니다.
1일(0시~24시 기준)이 초과할 경우 10분당 500원의 요금이 부과됩니다.
        `,
      },
      {
        title: "기타",
        subTitle: "점심 식사가 제공되나요?",
        content: `
행사 당일에 1인 8만원 상당의 호텔 식사를 제공합니다.
        `,
      },
      {
        title: "기타",
        subTitle: "이벤트에 참여하고 싶습니다. 어떻게 해야 하나요?",
        content: `
- 행사 끝나기 전 행운권 추첨 이벤트가 있습니다. 접수 시 받으신 명찰 뒤에 행운권 번호를 확인해주세요.
- 행사 당일 현장 사진을 찍어 SNS에 필수 해시태그와 함께 업로드 해주세요.
- 행사장 밖의 FMC23 엑스포 부스들을 다니시면서 팜플렛 뒷면에 스탬프를 완성해 제출해 주세요. 
각 이벤트를 참여하신 분에 한해 추첨을 통해 소정의 선물을 드립니다. 
        `,
      },
      {
        title: "기타",
        subTitle: "Wi-Fi와 충전기를 사용할 수 있나요?",
        content: `
Wi-Fi는 제공되며, 충전기는 따로 제공하지 않습니다.
        `,
      },
      {
        title: "기타",
        subTitle:
          "행사 후에도 미디어 아카데미 등을 통해 교회 미디어에 관한 자문을 구하고 싶습니다. 어떻게 해야 하나요?",
        content: `
FMC23 공식 사무국 00-000-0000으로 문의 주십시오.
가능한 방법들을 안내해 드리도록 하겠습니다. 
        `,
      },
    ],
  ];

  return (
    <div className={styles.background}>
      <div className={styles.title}>
        <h1>자주 묻는 질문</h1>
      </div>
      <div className={styles.contents}>
        {window.innerWidth <= 767 ? (
          <div className={styles.topBar}>
            <div className={styles.container}>
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
            </div>
            <div className={styles.container}>
              <button
                className={topActive === 2 ? styles.topActive : null}
                onClick={() => setTopActive(2)}
              >
                퐁당 네트워크 교회
              </button>
              <button
                className={topActive === 3 ? styles.topActive : null}
                onClick={() => setTopActive(3)}
              >
                기타
              </button>
            </div>
          </div>
        ) : (
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
              퐁당 네트워크 교회
            </button>
            <button
              className={topActive === 3 ? styles.topActive : null}
              onClick={() => setTopActive(3)}
            >
              기타
            </button>
          </div>
        )}

        <div className={styles.faq}>
          {datas[topActive].map((data, index) => (
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
