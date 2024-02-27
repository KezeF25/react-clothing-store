import React from "react";

import styles from "./NewCollections.module.scss";

import Item from "../Item/Item.jsx";

import { useSelector } from "react-redux";

export const NewCollections = () => {

  const newCollections = useSelector((state) => state.dataSlices.newCollections)

  return (
    <div className={styles.newCollections}>
      <h1>Новые Коллекции</h1>
      <hr />
      <div className={styles.collections}>
        {newCollections.map((item, index) => {
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

export default NewCollections;
