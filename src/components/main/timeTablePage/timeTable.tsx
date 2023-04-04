import styles from "./timeTable.module.css";

const TimeTable = () => {
  return (
    <div className={styles.background}>
      <div className={styles.title}>
        <h1>타임 테이블</h1>
      </div>
      <div className={styles.contents}>
        <table>
          <tbody>
            <tr>
              <td width={"13%"}>09:00 ~ 10:00</td>
              <td width={"10%"}>등록 데스크</td>
              <td>등록</td>
              <td></td>
            </tr>
            <tr>
              <td width={"13%"}>10:00 ~ 10:30</td>
              <td width={"10%"}></td>
              <td>오프닝</td>
              <td></td>
            </tr>
            <tr>
              <td width={"13%"}>10:30 ~ 11:00</td>
              <td width={"10%"}>메인 강연 1</td>
              <td>미디어 전망 그리고 퐁당</td>
              <td align="center" width={"20%"}>
                이재훈 목사 <br />
                (온누리교회)
              </td>
            </tr>
            <tr>
              <td width={"13%"}>11:00 ~ 11:30</td>
              <td width={"10%"}>메인 강연 2</td>
              <td>AI, 미래 사회 그리고 기독교 전망</td>
              <td align="center" width={"20%"}>
                김경훈 사장 <br />
                (구글 코리아)
              </td>
            </tr>
            <tr>
              <td width={"13%"}>11:30 ~ 12:00</td>
              <td width={"10%"}>대답 + Q&A</td>
              <td>질의 응답</td>
              <td></td>
            </tr>
            <tr>
              <td width={"13%"}>12:00 ~ 13:30</td>
              <td width={"10%"}></td>
              <td>점심 식사 + 네트워킹 타임</td>
              <td></td>
            </tr>
            <tr>
              <td width={"13%"}>13:30 ~ 14:00</td>
              <td width={"10%"}>메인 강연 3</td>
              <td>AI 시대의 목회와 4C전략</td>
              <td align="center" width={"20%"}>
                데이비드 전 대표 <br />
                (디엠랩)
              </td>
            </tr>
            <tr>
              <td width={"13%"}>14:00 ~ 14:30</td>
              <td width={"10%"}>메인 강연 4</td>
              <td>4C 및 온라인 교회 활용 사례</td>
              <td align="center" width={"20%"}>
                바비 그룬왈드 목사 <br />
                (라이프처치/유버전 성경)
              </td>
            </tr>
            <tr>
              <td width={"13%"}>14:30 ~ 15:00</td>
              <td width={"10%"}>대답 + Q&A</td>
              <td>질의 응답</td>
              <td></td>
            </tr>
            <tr>
              <td width={"13%"}>15:00 ~ 15:20</td>
              <td width={"10%"}></td>
              <td>후원사 소개</td>
              <td></td>
            </tr>
            <tr>
              <td width={"13%"}>15:20 ~ 15:50</td>
              <td width={"10%"}></td>
              <td>기독 OTT 퐁당 소개</td>
              <td></td>
            </tr>
            <tr>
              <td width={"13%"}>15:50 ~ 16:20</td>
              <td width={"10%"}></td>
              <td>퐁당 사례 교회 발표</td>
              <td></td>
            </tr>
            <tr>
              <td width={"13%"}>16:20 ~ 16:50</td>
              <td width={"10%"}></td>
              <td>질의 응답</td>
              <td></td>
            </tr>
            <tr>
              <td width={"13%"}>16:50 ~ 17:10</td>
              <td width={"10%"}></td>
              <td>퐁당 미디어 아카데미 소개</td>
              <td></td>
            </tr>
            <tr>
              <td width={"13%"}>17:10 ~ 17:35</td>
              <td width={"10%"}>이벤트</td>
              <td>경품 및 추첨</td>
              <td></td>
            </tr>
            <tr>
              <td width={"13%"}>17:35</td>
              <td width={"10%"}></td>
              <td>마무리 및 네트워킹 타임</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;
