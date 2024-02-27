import React from "react";

import styles from "./ProductDisplay.module.scss";

import starIcon from "../Assets/star_icon.png";
import starDullIcon from "../Assets/star_dull_icon.png";
import { addToCart } from "../../redux/Slices/dataSlices.jsx";
import { useDispatch } from "react-redux";

export const ProductDisplay = (props) => {
  const { product } = props;

  const dispatch = useDispatch()

  function onClickButtonAddToCart(item){
    dispatch(addToCart(item));
  }

  return (
    <div className={styles.productDisplay}>
      <div className={styles.productDisplayLeft}>
        <div className={styles.productDisplayLeftImgList}>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className={styles.productDisplayImg}>
          <img
            className={styles.productDisplayMainImg}
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className={styles.productDisplayRight}>
        <h1>{product.name}</h1>
        <div className={styles.ProductDisplayRigthStar}>
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className={styles.productDisplayRightPrice}>
          <div className={styles.productDisplayRightPriceOld}>
            ${product.old_price}
          </div>
          <div className={styles.productDisplayRightPriceNew}>
            ${product.new_price}
          </div>
        </div>
        <div className={styles.productDisplayRightDescripton}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, culpa
          consectetur magni officiis consequatur, ipsam harum officia sed
          facilis doloremque qui est fuga quos quae tempora saepe cum? Amet,
          sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          voluptatem, laudantium sit debitis, quo aspernatur tempora molestias
          quam doloribus, autem eaque est facilis quod dolores. Adipisci,
          impedit. Cumque, itaque eligendi!
        </div>
        <div className={styles.productDisplayRightSize}>
          <h1>Выбери Размер</h1>
          <div className={styles.productDisplayRightSizes}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick= {() => onClickButtonAddToCart(product)}>Добавить в Коризину</button>
        <p className={styles.productDisplayRightCategory}>
          <span>Категория:</span> Женщины, Футболка
        </p>
        <p className={styles.productDisplayRightCategory}>
          <span>Теги:</span> современные, новейшие
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
