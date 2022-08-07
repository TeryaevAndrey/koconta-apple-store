import React from 'react';
import styles from './CartProduct.module.scss';

import close from '../../img/close.svg';

const CartProduct = (props) => {
    return(
        <div className={styles.cartProduct}>
            <div onClick={() => props.deleteProductFromCart(props.id)} className={styles.delete}>
                <span>удалить</span>
                <img className={styles.deleteImg} src={close} alt="delete" />
            </div>

            <img className={styles.productImg} src={props.img} alt="product" />

            <div className={styles.info}>
                <h3>{props.name}</h3>
                <p>{props.price} руб</p>
            </div>
        </div>
    );
}

export default CartProduct;