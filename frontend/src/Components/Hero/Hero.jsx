import React from "react";

import styles from "./Hero.module.scss";

import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <div>
          <div className={styles.heroHandIcon}>
            <p>Новые</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Коллекции</p>
          <p>Для всех</p>
        </div>
        <div className={styles.heroLatestBtn}>
          <div>Последние Коллекции</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className={styles.heroRight}>
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
