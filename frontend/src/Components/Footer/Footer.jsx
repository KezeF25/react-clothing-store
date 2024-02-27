import React from "react";

import styles from "./Footer.module.scss";

import footerLogo from "../Assets/logo_big.png";
import instagramIcon from "../Assets/instagram_icon.png";
import pintesterIcon from "../Assets/pintester_icon.png";
import whatsappIcon from "../Assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={footerLogo} alt="" />
        <p>КВАЗИМОДА</p>
      </div>
      <ul className={styles.footerLinks}>
        <li>Компания</li>
        <li>Продуты</li>
        <li>Оффисы</li>
        <li>О нас</li>
        <li>Контакты</li>
      </ul>
      <div className={styles.footerSocialIcon}>
        <div className={styles.footerContainerIcon}>
          <img src={instagramIcon} alt="" />
        </div>
        <div className={styles.footerContainerIcon}>
          <img src={pintesterIcon} alt="" />
        </div>
        <div className={styles.footerContainerIcon}>
          <img src={whatsappIcon} alt="" />
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <hr />
        <p>Copyright @ 2023 - All Right Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
