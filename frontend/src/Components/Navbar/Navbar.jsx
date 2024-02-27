import React, { useRef } from "react";

import styles from "./Navbar.module.scss";

import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import navDropDownIcon from '../Assets/nav_dropdown_icon.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {

  const [menuHrTag, setMenuHrTag] = React.useState("Магазин");
  const [showMobileNavBar, setShowMobileNavBar] = React.useState(false);
  const cartItems = useSelector((state) => state.dataSlices.cartItems);

  function dropdownToggle(e){
    setShowMobileNavBar(!showMobileNavBar);
  }

  function findTotalCount(){
    return cartItems.reduce((acc, item) => acc + item.count, 0);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="" />
        <p>КВАЗИМОДА</p>
      </div>
      <img className={`${styles.navDropdown} ${showMobileNavBar && styles.open}`} onClick={dropdownToggle} src={navDropDownIcon} alt=""/>
      <ul className={`${styles.navMenu} ${showMobileNavBar && styles.navMenuVisible}`}>
        <li onClick={() => setMenuHrTag("Магазин")}>
          <Link to="/">Магазин</Link>
          {menuHrTag === "Магазин" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenuHrTag("Для Мужчин")}>
          <Link to="/man">Для Мужчин</Link>
          {menuHrTag === "Для Мужчин" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenuHrTag("Для Женщин")}>
          <Link to="/women">Для Женщин</Link>
          {menuHrTag === "Для Женщин" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenuHrTag("Для детей")}>
          <Link to="/kids">Для детей</Link>
          {menuHrTag === "Для детей" ? <hr /> : <></>}
        </li>
      </ul>
      <div className={styles.navLoginCart}>
        <Link to="/login">
          <button>Логин</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>
        <div className={styles.navCartCount}>{cartItems ? findTotalCount() : 0}</div>
      </div>
    </div>
  );
};

export default Navbar;
