import React from "react";

import styles from "./Product.module.scss";

import add from "../../img/add.svg";

const Product = (props) => {
  return (
    <div className={styles.product}>
      <img className={styles.img} src={props.info.img} alt="productImg" />
      <h2 className={styles.name}>{props.info.name}</h2>
      <ul className={styles.memoryList}>
        {
          props.info.memory.map((item, index) => (
            <li key={index} className={styles.memoryItem}>{item}</li>
          ))
        }
      </ul>
      <div className={styles.footer}>
        <span className={styles.price}>от {props.info.price} руб</span>
        <img className={styles.add} src={add} alt="add" />
      </div>
    </div>
  );
};

export default Product;
