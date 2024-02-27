import React from "react";
import Item from "../Item/Item.jsx";

import styles from "./RelatedProducts.module.scss";

import { useSelector } from "react-redux";

export const RelatedProducts = () => {

  const dataProduct = useSelector((state) => state.dataSlices.data);

  return (
    <div className={styles.RelatedProducts}>
      <h1>Похожие товары</h1>
      <hr />
      <div className={styles.RelatedProductsItem}>
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

export default RelatedProducts;
