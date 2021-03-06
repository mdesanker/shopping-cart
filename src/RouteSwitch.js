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
  const [subTotal, setSubTotal] = useState(0);

  // Functions
  const quantityChangeHandler = (e) => {
    const { value } = e.target;
    setQuantity(value);
  };

  const quantityIncrementHandler = (e) => {
    // Get item id and operation to perform
    const { itemid, oper } = e.target.dataset;

    // Modify number for selected item
    setCart((prevState) => {
      return prevState.map((entry) => {
        // Leave other items unchanged
        if (entry.item.id.toString() !== itemid) {
          return entry;

          // Overwrite item with new quantity
        } else {
          if (oper === "dec") {
            const newQuantity = entry.number - 1;
            return {
              item: productData[Number.parseInt(itemid)],
              number: newQuantity,
            };
          } else {
            const newQuantity = entry.number + 1;
            return {
              item: productData[Number.parseInt(itemid)],
              number: newQuantity,
            };
          }
        }
      });
    });

    // Filter out items with quantity <= 0
    setCart((prevState) => {
      return prevState.filter((entry) => entry.number > 0);
    });
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

  const removeFromCartHandler = (e) => {
    const { id } = e.target;
    setCart((prevState) => {
      return prevState.filter((entry) => entry.item.id !== Number.parseInt(id));
    });
  };

  useEffect(() => {
    setSubTotal(
      cart.length > 0 &&
        cart
          .map((entry) => entry.item.price * entry.number)
          .reduce((acc, val) => acc + val, 0)
    );
  }, [cart]);

  return (
    <Router>
      <GlobalStyle />
      <Header cartInfo={cart} onOpenCart={openCartHandler} />
      {isCartOpen && (
        <Cart
          info={cart}
          price={subTotal}
          onCloseCart={closeCartHandler}
          onDeleteItem={removeFromCartHandler}
          onModifyItem={quantityIncrementHandler}
        />
      )}
      <Routes>
        <Route path="/shopping-cart" element={<Home />} />
        <Route path="/shopping-cart/products" element={<Products />} />
        <Route path="/shopping-cart/contact" element={<Contact />} />
        <Route
          path="/shopping-cart/products/:id"
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
