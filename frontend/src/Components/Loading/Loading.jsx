import React from "react";

import styles from './Loading.module.scss'

export const Loading = () => {
  return (
    <div className={styles.Loading}>
      <div className={styles.LoadingText}>
        <span className={styles.LoadingTextWord}>З</span>
        <span className={styles.LoadingTextWord}>А</span>
        <span className={styles.LoadingTextWord}>Г</span>
        <span className={styles.LoadingTextWord}>Р</span>
        <span className={styles.LoadingTextWord}>У</span>
        <span className={styles.LoadingTextWord}>З</span>
        <span className={styles.LoadingTextWord}>К</span>
        <span className={styles.LoadingTextWord}>А</span>
      </div>
    </div>
  );
};

export default Loading;
