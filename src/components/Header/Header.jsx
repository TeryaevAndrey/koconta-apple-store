import React from "react";
import styles from "./Header.module.scss";

import logo from "../../img/logo.svg";
import cart from "../../img/cart.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <a className={styles.logo} href="#">
        <img className={styles.logoImg} src={logo} alt="logo" />
      </a>
      <div className={styles.cartWrapper}>
        <span className={styles.cartText}>Корзина</span>
        <img className={styles.cartImg} src={cart} alt="cart" />
      </div>
    </div>
  );
};

export default Header;
