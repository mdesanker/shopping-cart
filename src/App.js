import React, { Fragment } from "react";
import Header from "./components/Header";
import GlobalStyle from "./themes/GlobalStyles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <h1>App</h1>
    </Fragment>
  );
};

export default App;
