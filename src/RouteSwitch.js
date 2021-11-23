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
  // States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Functions
  const quantityChangeHandler = (e) => {
    const { value } = e.target;
    setQuantity(value);
  };

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  const addToCartHandler = (e) => {
    const { id } = e.target;

    // Check if item already existing in cart
    const itemIndex = cart
      .map((entry) => entry.item)
      .indexOf(productData[Number.parseInt(id)]);

    // If not in cart, add to cart
    if (itemIndex === -1) {
      setCart((prevState) => {
        return [
          ...prevState,
          {
            item: productData[Number.parseInt(id)],
            number: Number.parseInt(quantity),
          },
        ];
      });

      // If in cart, increase quantity
    } else {
      const newQuantity = cart[itemIndex].number + Number.parseInt(quantity);

      setCart((prevState) => {
        return prevState.map((entry, index) => {
          if (index !== itemIndex) {
            return entry;
          } else {
            return {
              item: productData[Number.parseInt(id)],
              number: newQuantity,
            };
          }
        });
      });
    }

    setQuantity(1);
    openCartHandler();
  };

  useEffect(() => {
    // console.log("cart", cart);
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
              num={quantity}
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
