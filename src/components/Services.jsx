import React from "react";
import { apple, billing, google } from "../assets";
import styles, { layout } from "../style";

const Services = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={billing}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Предоставяме висококвалифицирано обучение:
        </h2>
        <ul className={`${styles.listStyle} max-w-[470px] mt-5`}>
          <li>Обучаваме деца от детски градини и училища.</li>
          <li>Създаваме състезателни двойки по спортни танци.</li>
          <li>
            Обучаваме желаещи да танцуват спортни танци на възраст над 18 години.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
