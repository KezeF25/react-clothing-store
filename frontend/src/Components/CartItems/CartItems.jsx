import React from "react";

import removeIcon from "../Assets/cart_cross_icon.png";

import styles from "./CartItems.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/Slices/dataSlices";

export const CartItems = () => {
  const cartItems = useSelector((state) => state.dataSlices.cartItems);
  const dispatch = useDispatch();

  function onClickRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  function findTotal() {
    const total = cartItems.reduce(
      (acc, item) => acc + item.count * item.new_price,
      0
    );

    return total;
  }

  return (
    <div className={styles.CartItems}>
      <div className={styles.CartItemsFormatMain}>
        <p>Товар</p>
        <p>Название</p>
        <p>Цена</p>
        <p>Количество</p>
        <p>Всего</p>
        <p>Убрать</p>
      </div>
      <hr />
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <div
                className={`${styles.CartItemsFormat} ${styles.CartItemsFormatMain}`}
              >
                <img
                  className={styles.cartItemsProductImg}
                  src={item.image}
                  alt=""
                />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className={styles.cartItemsCount}>{item.count}</button>
                <p>${item.new_price * item.count}</p>
                <img
                  className={styles.cartItemsRemoveIcon}
                  src={removeIcon}
                  onClick={() => onClickRemoveFromCart(item.id)}
                  alt=""
                />
              </div>
            </div>
            <hr />
          </div>
        );
      })}

      <div className={styles.CartItemsDown}>
        <div className={styles.CartItemsDownTotal}>
          <h1>Cart totals</h1>
          <div>
            <div className={styles.CartItemsTotalItems}>
              <p>subtotal</p>
              <p>${findTotal()}</p>
            </div>
            <hr />
            <div className={styles.CartItemsTotalItems}>
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles.CartItemsTotalItems}>
              <h3>Total</h3>
              <h3>${findTotal()}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className={styles.CartItemsPromocode}>
          <p>Если у вас есть промокод, введите его здесь</p>
          <div className={styles.cartItemsPromoBox}>
            <input type="text" placeholder="Промокод" />
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
