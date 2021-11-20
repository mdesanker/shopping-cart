import styled from "styled-components";
import ReactDOM from "react-dom";

const Cart = (props) => {
  return <CartContainer>Test</CartContainer>;
};

const Overlay = (props) => {
  return ReactDOM.createPortal(<Cart />, document.querySelector("#overlay"));
};

const CartContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  height: 100vh;
  width: 400px;
  background-color: gray;
`;

export default Overlay;
