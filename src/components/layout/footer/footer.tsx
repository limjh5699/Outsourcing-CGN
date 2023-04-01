import styles from "./footer.module.css";

import logo from "../../../assets/layout/logo.png";

const Footer = () => {
  return (
    <div className={styles.background}>
      <div className={styles.size}>
        <div className={styles.contents}>
          <img src={logo} alt="logo" />
          <div className={styles.container}>
            <p>개인정보 처리방침</p>
            <p>퐁당 소개</p>
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
      </div>
      <div className={styles.sponsor}>
        <span>후원사</span>
      </div>
    </div>
  );
};

export default Footer;
