import styles from "./firstSection.module.css";

import { useState, useRef } from "react";

import Modal from "../modal/modal";

const FirstSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.background}>
      {modalOpen && <Modal setModalOpen={setModalOpen} modalRef={modalRef} />}
      <div className={styles.content}>
        <div className={styles.info}>
          <h1>
            <b>2023.5.29.(월)</b>
          </h1>
          <h3>더케이호텔서울 그랜드볼룸</h3>
        </div>
        <button className={styles.btn} onClick={() => setModalOpen(true)}>
          참가 신청 하기 →
        </button>
      </div>
    </div>
  );
};

export default FirstSection;
