import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Product from "./components/Product/Product";

import axios from "axios";

import sadSmile from "./img/sadSmile.svg";

import "./App.scss";

function App() {
  const [products, setProducts] = React.useState([]);
  const [activeItem, setActiveItem] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");

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
  const filterProducts = products.filter(
    (element) => {
      if(!searchValue.length) {
        return element.type === activeItemMenu;
      } else {
        return element.name.toLowerCase().includes(searchValue.toLowerCase());
      }
    }
  );

  React.useEffect(() => {
    axios
      .get("https://62e998663a5f1572e86cf2ce.mockapi.io/products")
      .then((res) => setProducts(res.data));
  }, []);

  const handleItem = (index) => {
    setActiveItem(index);
  };

  const handleChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <Header
        changeSearch={handleChangeSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="mainWrapper">
        <Sidebar
          menuItems={menuItems}
          handleItem={handleItem}
          activeItem={activeItem}
        />
        <div className="products">
          {
            filterProducts.length > 0 ? (
              filterProducts.map((product) => (
                <Product key={product.id} info={product} />
              ))
            ) : (
              <div className="outStock">
                <img className="outStockImg" src={sadSmile} alt="sadSmile" />
                <span className="outStockText">Нет в наличии</span>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
