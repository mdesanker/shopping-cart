import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Product/Products";
import Header from "./components/Header";
import GlobalStyle from "./themes/GlobalStyles";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ItemDetail from "./components/Product/ItemDetail";
import { useState } from "react";
import Cart from "./components/Cart/Cart";

const RouteSwitch = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  const addToCartHandler = (e) => {
    const { id } = e.target;
    // console.log("ID selected", id);
    setCart((prevState) => [...prevState, id]);
    openCartHandler();
  };

  return (
    <Router>
      <GlobalStyle />
      <Header onOpenCart={openCartHandler} />
      {isCartOpen && <Cart cartDetails={cart} onCloseCart={closeCartHandler} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products/:id"
          element={<ItemDetail onAdd={addToCartHandler} />}
        />
        {/* <Route
          path="/products/:id"
          render={({ match }) => <ItemDetail id={match.params.id} />}
        /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default RouteSwitch;
