import styles from "./header.module.css";
import logo from "../../../assets/layout/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.background}>
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <ul className={styles.nav}>
          <li className={styles.li_right}>
            <Link to={"/"}>행사소개</Link>
          </li>
          <li className={styles.li_center}>
            <Link to={"/"}>참가 신청</Link>
          </li>
          <li className={styles.li_left}>
            <Link to={"/"}>타임 테이블</Link>
          </li>
          <li className={styles.li_left}>
            <Link to={"/"}>자주 묻는 질문</Link>
          </li>
          <li className={styles.li_center}>
            <Link to={"/"}>행사장</Link>
          </li>
          <li className={styles.li_left}>
            <Link to={"/"}>이벤트</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
