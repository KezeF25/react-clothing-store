import React from "react";

import styles from "./scss/ShopCategory.module.scss";
import dropDownIcon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { useSelector } from "react-redux";

export const ShopCategory = (props) => {
  const allProduct = useSelector((state) => state.dataSlices.allProduct);

  return (
    <div className={styles.shopCategory}>
      <img className={styles.shopCategoryBanner} src={props.banner} alt="" />
      <div className={styles.shopCategoryIndexSort}>
        <p>
          <span>Показать 1-12</span> из 36 товаров
        </p>
        <div className={styles.shopCategorySort}>
          Сортировать по <img src={dropDownIcon} alt="" />
        </div>
      </div>
      <div className={styles.shopCategoryProduct}>
        {allProduct.map((item, index) => {
          if (props.category === item.category) {
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
          }
        })}
      </div>
      <div className={styles.shopCategoryLoadMore}>
        Посмотреть больше
      </div>
    </div>
  );
};

export default ShopCategory;
