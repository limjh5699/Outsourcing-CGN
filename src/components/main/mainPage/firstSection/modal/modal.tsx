import { Link } from "react-router-dom";
import styles from "./modal.module.css";

import { useEffect } from "react";

interface propsType {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.RefObject<HTMLDivElement>;
}

const Modal = ({ setModalOpen, modalRef }: propsType) => {
  useEffect(() => {
    const handler = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={styles.background}>
      <div ref={modalRef} className={styles.container}>
        <button className={styles.exitBtn} onClick={() => setModalOpen(false)}>
          X
        </button>
        <h1 className={styles.title}>무료 참가 신청</h1>
        <p className={styles.subTitle}>
          온라인 사전 등록 기간! <br />
          퐁당 미디어 콘퍼런스 <br />
          무료로 참가 신청하는 4가지 방법
        </p>
        <div className={styles.btnArea}>
          <Link to="/regist#secondSection" className={styles.btn}>
            퐁당 네트워크 교회 가입
          </Link>
          <Link to="/regist#fourthSection" className={styles.btn}>
            신청 개인 참가자 신청
          </Link>
          <Link to="/regist#thirdSection" className={styles.btn}>
            신학생 인증하고 참가 신청
          </Link>
          <Link to="/regist#fifthSection" className={styles.btn}>
            퐁당 교회 네트워크 인증
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
