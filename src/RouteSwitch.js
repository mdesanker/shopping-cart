import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Product/Products";
import Header from "./components/Header";
import GlobalStyle from "./themes/GlobalStyles";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ItemDetail from "./components/Product/ItemDetail";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import productData from "./assets/catalog.json";

const RouteSwitch = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const quantityChangeHandler = (e) => {
    const { value } = e.target;
    setQuantity(value);
  };

  console.log(quantity);

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  const addToCartHandler = (e) => {
    const { id } = e.target;
    setCart((prevState) => [
      ...prevState,
      {
        item: productData[Number.parseInt(id)],
        number: Number.parseInt(quantity),
      },
    ]);
    openCartHandler();
  };

  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);

  return (
    <Router>
      <GlobalStyle />
      <Header onOpenCart={openCartHandler} />
      {isCartOpen && <Cart info={cart} onCloseCart={closeCartHandler} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products/:id"
          element={
            <ItemDetail
              onAdd={addToCartHandler}
              onChangeQuantity={quantityChangeHandler}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RouteSwitch;
