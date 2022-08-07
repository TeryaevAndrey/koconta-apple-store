import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

import axios from "axios";

import sadSmile from "./img/sadSmile.svg";

import "./App.scss";

function App() {
  const [products, setProducts] = React.useState([]);
  const [activeItem, setActiveItem] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");
  const [beforePrice, setBeforePrice] = React.useState(0);
  const [afterPrice, setAfterPrice] = React.useState(0);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState([]);

  const menuItems = [
    "iPhone",
    "MacBook",
    "iMac",
    "iPad",
    "Watch",
    "AirPods",
    "accessories",
  ];

  const activeItemMenu = menuItems[activeItem].toLowerCase();
  const filterProducts = products.filter((element) => {
    if (!searchValue.length) {
      if (!afterPrice.length && beforePrice.length) {
        return element.price >= beforePrice && element.type === activeItemMenu;
      }

      if (!beforePrice.length && afterPrice.length) {
        return element.price <= afterPrice && element.type === activeItemMenu;
      }

      if (beforePrice.length && afterPrice.length) {
        return (
          element.price >= beforePrice &&
          element.price <= afterPrice &&
          element.type === activeItemMenu
        );
      }

      return element.type === activeItemMenu;
    } else {
      return element.name.toLowerCase().includes(searchValue.toLowerCase());
    }
  });

  React.useEffect(() => {
    axios
      .get("https://62e998663a5f1572e86cf2ce.mockapi.io/products")
      .then((res) => setProducts(res.data));

    axios
      .get("https://62e998663a5f1572e86cf2ce.mockapi.io/cart")
      .then((res) => setCartProducts(res.data));
  }, []);

  const handleItem = (index) => {
    setActiveItem(index);
  };

  const handleChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const onChangeBeforePrice = (event) => {
    setBeforePrice(event.target.value);
  };

  const onChangeAfterPrice = (event) => {
    setAfterPrice(event.target.value);
  };

  const addProductToCart = (obj) => {
    axios.post('https://62e998663a5f1572e86cf2ce.mockapi.io/cart', obj);
    setCartProducts(prev => [...prev, obj])
  };

  const deleteProductFromCart = (id) => {
    setCartProducts(prev => prev.filter(item => item.id !== id));
    axios.delete(`https://62e998663a5f1572e86cf2ce.mockapi.io/cart/${id}`);
  };

  return (
    <div className="App">
      <Header
        changeSearch={handleChangeSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
      <div className="mainWrapper">
        <Sidebar
          menuItems={menuItems}
          handleItem={handleItem}
          activeItem={activeItem}
          beforePrice={beforePrice}
          afterPrice={afterPrice}
          changeBefore={onChangeBeforePrice}
          changeAfter={onChangeAfterPrice}
        />
        <div className="products">
          {filterProducts.length > 0 ? (
            filterProducts.map((product) => (
              <Product key={product.id} info={product} addProductToCart={addProductToCart}/>
            ))
          ) : (
            <div className="outStock">
              <img className="outStockImg" src={sadSmile} alt="sadSmile" />
              <span className="outStockText">Нет в наличии</span>
            </div>
          )}
        </div>
      </div>
      {cartOpen && <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} cartProducts={cartProducts} deleteProductFromCart={deleteProductFromCart}/>}
    </div>
  );
}

export default App;
