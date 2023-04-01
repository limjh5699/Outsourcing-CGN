import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

import logo from "../../../assets/layout/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [openBar, setOpenBar] = useState(false);
  const notBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (notBarRef.current && notBarRef.current.contains(e.target)) {
        setOpenBar(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const onClickHandler = () => {
    setOpenBar(!openBar);
  };

  return (
    <header className={styles.background}>
      {openBar && <div className={styles.notBar} ref={notBarRef}></div>}
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <ul className={openBar === false ? styles.nav : styles.openNav}>
          <li>
            <Link to={"/"} onClick={() => setOpenBar(false)}>
              행사소개
            </Link>
          </li>
          <li>
            <Link to={"/regist"} onClick={() => setOpenBar(false)}>
              참가 신청
            </Link>
          </li>
          <li>
            <Link to={"/time"} onClick={() => setOpenBar(false)}>
              타임 테이블
            </Link>
          </li>
          <li>
            <Link to={"/FAQ"} onClick={() => setOpenBar(false)}>
              자주 묻는 질문
            </Link>
          </li>
          <li>
            <Link to={"/place"} onClick={() => setOpenBar(false)}>
              행사장
            </Link>
          </li>
          <li>
            <Link to={"/event"} onClick={() => setOpenBar(false)}>
              이벤트
            </Link>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={onClickHandler}
          className={styles.burger}
          icon={faBars}
          style={{ color: "#ffffff" }}
        />
      </div>
    </header>
  );
};

export default Header;
