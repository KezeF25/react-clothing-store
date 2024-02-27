import React from "react";

import Item from "../Item/Item.jsx";

import styles from "./Popular.module.scss";

import { useSelector } from "react-redux";

export const Popular = () => {
  const dataProduct = useSelector((state) => state.dataSlices.data);

  return (
    <div className={styles.popular}>
      <h1>Популярно у Женщин</h1>
      <hr />
      <div className={styles.popularItem}>
        {dataProduct.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
