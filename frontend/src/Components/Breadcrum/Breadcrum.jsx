import React from "react";
import styles from "./Breadcrum.module.scss";

import arrowIcon from "../Assets/breadcrum_arrow.png";

export const Breadcrum = (props) => {
  const product = props.product;

  return (
    <div className={styles.breadcrum}>
      Главная
      <img src={arrowIcon} alt="" />
      Магазин
      <img src={arrowIcon} />
      {product.category}
      <img src={arrowIcon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
