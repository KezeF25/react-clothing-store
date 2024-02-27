import React from "react";

import styles from "./Offers.module.scss";

import offer_image from "../Assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.offersLeft}>
        <h1>Эксклюзивные</h1>
        <h1>Предложения для тебя</h1>
        <p>Только лучшие товары</p>
        <button>Посмотреть</button>
      </div>
      <div className={styles.offersRight}>
        <img src={offer_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
