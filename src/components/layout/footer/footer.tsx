import styles from "./footer.module.css";

import logo from "../../../assets/layout/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.background}>
      <div className={styles.size}>
        <div className={styles.contents}>
          <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" />
          </Link>
          <div className={styles.container}>
            <Link
              to={"http://about.fondant.kr/about/download.html"}
              target="_blank"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p>퐁당 소개</p>
            </Link>
          </div>
        </div>
        <div className={styles.secContents}>
          <span>
            재단법인 온누리선교재단 <br />
            사업자 등록번호: 106-82-11892 | 이사장: 이재훈{" "}
            {window.innerWidth <= 767 ? <br /> : "|"} 주소: 서울특별시 용산구
            서빙고로 59길 8 | 대표 번호: 02-792-0691 <br />
            CopyrightⓒCGN. All right reserved.
          </span>
        </div>
        <div className={styles.tellNum}>
          <h2>문의 번호</h2>
          <span>
            퐁당 네트워크 가입 관련 | 02-3275-9371 <br />
            FMC 일반 문의 및 접수 | 02-3275-9372, 02-3275-9373
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
