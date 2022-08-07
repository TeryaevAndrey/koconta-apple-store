import React from "react";
import uuid from 'uuid';
import CartProduct from "../CartProduct/CartProduct";

import styles from "./Cart.module.scss";
import close from "../../img/close.svg";

const Cart = ({ cartOpen, setCartOpen, cartProducts, deleteProductFromCart}) => {
    let price = 0;

    cartProducts.forEach(element => {
        price += element.price
    });

  return (
    <div className={styles.cart}>
      <div className={styles.cartInner}>
        <img
          onClick={() => setCartOpen(!cartOpen)}
          className={styles.closeImg}
          src={close}
          alt="close"
        />
        <div className={styles.cartProducts}>
          <div className={styles.cartProductsInner}>
            {cartProducts.length > 0 ?
              cartProducts.map((cartProduct) => (
                <CartProduct
                  key={uuid()}
                  img={cartProduct.img}
                  name={cartProduct.name}
                  price={cartProduct.price}
                  id={cartProduct.id}
                  deleteProductFromCart={deleteProductFromCart}
                />
              )) : 'Корзина пуста'}
          </div>
        </div>
        <div className={styles.price}>Всего: {price} руб</div>
        <button className={styles.orderBtn}>Заказать</button>
      </div>
    </div>
  );
};

export default Cart;
