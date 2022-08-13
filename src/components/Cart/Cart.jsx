import React from "react";
import uuid from "uuid";
import CartProduct from "../CartProduct/CartProduct";

import styles from "./Cart.module.scss";
import close from "../../img/close.svg";
import cartClear from "../../img/clearCart.svg";

const Cart = ({
  cartOpen,
  setCartOpen,
  cartProducts,
  deleteProductFromCart,
  orderProducts,
  order,
}) => {
  let price = 0;

  cartProducts.forEach((element) => {
    price += element.price;
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
            {cartProducts.length > 0 ? (
              cartProducts.map((cartProduct) => (
                <CartProduct
                  key={uuid()}
                  img={cartProduct.img}
                  name={cartProduct.name}
                  price={cartProduct.price}
                  id={cartProduct.id}
                  deleteProductFromCart={deleteProductFromCart}
                />
              ))
            ) : (
              <div className={styles.cartClear}>
                <img
                  className={styles.cartClearImg}
                  src={cartClear}
                  alt="clear"
                />
                <span className={styles.cartClearText}>Корзина пуста</span>
              </div>
            )}
          </div>
        </div>
        {order && cartProducts.length > 0 && <span className={styles.orderText}>Заказ выполнен!</span>}
        <div className={styles.price}>Всего: {price} руб</div>
        <button onClick={orderProducts} className={styles.orderBtn}>
          Заказать
        </button>
      </div>
    </div>
  );
};

export default Cart;
