import styles from "./timeTable.module.css";

const TimeTable = () => {
  return (
    <div className={styles.background}>
      <div className={styles.contents}>
        <h1 className={styles.title}>타임 테이블</h1>
        <table>
          <tbody>
            <tr>
              <td width={"13%"}>09:00 ~ 10:00</td>
              <td width={"10%"}>등록 데스크</td>
              <td>등록</td>
            </tr>
            <tr>
              <td width={"13%"}>10:00 ~ 10:30</td>
              <td width={"10%"}></td>
              <td>오프닝</td>
            </tr>
            <tr>
              <td width={"13%"}>10:30 ~ 11:00</td>
              <td width={"10%"}>메인 강연 1</td>
              <td>미디어 전망 그리고 퐁당</td>
            </tr>
            <tr>
              <td width={"13%"}>11:00 ~ 11:30</td>
              <td width={"10%"}>메인 강연 2</td>
              <td>AI, 미래 사회 그리고 기독교 전망</td>
            </tr>
            <tr>
              <td width={"13%"}>11:30 ~ 12:00</td>
              <td width={"10%"}>대답 + Q&A</td>
              <td>질의 응답</td>
            </tr>
            <tr>
              <td width={"13%"}>12:00 ~ 13:30</td>
              <td width={"10%"}></td>
              <td>점심 식사 + 네트워킹 타임</td>
            </tr>
            <tr>
              <td width={"13%"}>13:30 ~ 14:00</td>
              <td width={"10%"}>메인 강연 3</td>
              <td>AI 시대의 목회와 4C전략</td>
            </tr>
            <tr>
              <td width={"13%"}>14:00 ~ 14:30</td>
              <td width={"10%"}>메인 강연 4</td>
              <td>4C 및 온라인 교회 활용 사례</td>
            </tr>
            <tr>
              <td width={"13%"}>14:30 ~ 15:00</td>
              <td width={"10%"}>대답 + Q&A</td>
              <td>질의 응답</td>
            </tr>
            <tr>
              <td width={"13%"}>15:00 ~ 15:20</td>
              <td width={"10%"}></td>
              <td>후원사 소개</td>
            </tr>
            <tr>
              <td width={"13%"}>15:20 ~ 15:50</td>
              <td width={"10%"}></td>
              <td>기독 OTT 퐁당 소개</td>
            </tr>
            <tr>
              <td width={"13%"}>15:50 ~ 16:20</td>
              <td width={"10%"}></td>
              <td>퐁당 사례 교회 발표</td>
            </tr>
            <tr>
              <td width={"13%"}>16:20 ~ 16:50</td>
              <td width={"10%"}></td>
              <td>질의 응답</td>
            </tr>
            <tr>
              <td width={"13%"}>16:50 ~ 17:10</td>
              <td width={"10%"}></td>
              <td>퐁당 미디어 아카데미 소개</td>
            </tr>
            <tr>
              <td width={"13%"}>17:10 ~ 17:35</td>
              <td width={"10%"}>이벤트</td>
              <td>경품 및 추첨</td>
            </tr>
            <tr>
              <td width={"13%"}>17:35</td>
              <td width={"10%"}></td>
              <td>마무리 및 네트워킹 타임</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;
