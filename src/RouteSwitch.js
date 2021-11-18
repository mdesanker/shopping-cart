import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/Header";
import GlobalStyle from "./themes/GlobalStyles";
import Footer from "./components/Footer";

const RouteSwitch = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RouteSwitch;
