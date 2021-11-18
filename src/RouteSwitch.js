import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import GlobalStyle from "./themes/GlobalStyles";

const RouteSwitch = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
