import React from "react";

import styles from './scss/LoginSignUp.module.scss'

export const LoginSignUp = () => {
  return (
    <div className={styles.loginSignUp}>
      <div className={styles.loginSignUpContainer}>
        <h1>Войти</h1>
        <div className={styles.loginSignUpFields}>
          <input type="text" placeholder="Ваше Имя" />
          <input type="email" placeholder="Ваш email адрес" />
          <input type="password" placeholder="Ваш пароль" />
        </div>
        <button>Продолжить</button>
        <p className={styles.loginSignUpLogin}>
          Уже есть Аккаунт?<span>Войти</span>
        </p>
        <div className={styles.loginSignUpAgree}>
          <input type="checkbox" name="" id="" />
          <p>Вы соглашаетесь с Политикой конфиденциальности и условими использования</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
