import React from "react";
import styles from "./Header.module.scss";

import logo from "../../img/logo.svg";
import cart from "../../img/cart.svg";
import search from '../../img/search.svg';
import clear from '../../img/close.svg';
import Cart from "../Cart/Cart";

const Header = ({changeSearch, searchValue, setSearchValue, cartOpen, setCartOpen}) => {
  return (
    <div className={styles.header}>
      <a className={styles.logo} href="#">
        <img className={styles.logoImg} src={logo} alt="logo" />
      </a>
      <div className={styles.searchInputWrapper}>
          <img className={styles.searchImg} src={search} alt="search" />
          <input onChange={changeSearch} value={searchValue} type="text" placeholder="Найти..." />
          {
            searchValue.length > 0 && <img onClick={() => setSearchValue('')} className={styles.clearImg} src={clear} alt="clear" />
          }
        </div>
      <div onClick={() => setCartOpen(!cartOpen)} className={styles.cartWrapper}>
        <span className={styles.cartText}>Корзина</span>
        <img className={styles.cartImg} src={cart} alt="cart" />
      </div>
    </div>
  );
};

export default Header;
