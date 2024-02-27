import React from "react";

import styles from "./DescriptionBox.module.scss";

export const DescriptionBox = () => {
  return (
    <div className={styles.DescriptionBox}>
      <div className={styles.DescriptionBoxNavigator}>
        <div className={styles.DescriptionBoxNavBox}>Описание</div>
        <div className={`${styles.DescriptionBoxNavBox} ${styles.fade}`}>
          Отзывы(122)
        </div>
      </div>
      <div className={styles.DescriptionBoxDescription}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          neque voluptas maiores omnis illo aperiam totam, corrupti dolorum,
          sunt beatae aut sapiente eveniet sit dolore molestias aliquam
          praesentium rem nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          vero hic tempora doloremque ab molestiae provident quo ducimus, est
          earum. Quam quibusdam accusamus excepturi laboriosam, id veniam nihil
          rem incidunt!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
