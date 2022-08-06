import React from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        {props.menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => props.handleItem(index)}
            className={props.activeItem === index ? styles.active : null}
          >
            {item}
          </li>
        ))}
      </ul>
      <p>Цена</p>
      <div className={styles.priceInputWrapper}>
        <input type="text" placeholder="от" />
        <input type="text" placeholder="до" />
      </div>
    </div>
  );
};

export default Sidebar;
