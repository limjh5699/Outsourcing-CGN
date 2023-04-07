import { useState, useRef } from "react";

import styles from "./firstSection.module.css";

import Modal from "./modal/modal";

import title from "../../../../assets/mainPage/title.png";
import rectangle from "../../../../assets/mainPage/rectangle.png";

const FirstSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.background}>
      <div className={styles.ractangle}>
        <img src={rectangle} alt="rectangle" />
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen} modalRef={modalRef} />}
      <div className={styles.content}>
        <img src={title} alt="title" className={styles.img} />
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
