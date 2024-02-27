import React from "react";
import { Link } from "react-router-dom";

import styles from "./Item.module.scss";

export const Item = (props) => {
  return (
    <div className={styles.item}>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className={styles.itemPrices}>
        <div className={styles.itemNewPrice}>${props.newPrice}</div>
        <div className={styles.itemOldPrice}>${props.oldPrice}</div>
      </div>
    </div>
  );
};

export default Item;
