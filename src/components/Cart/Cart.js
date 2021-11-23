import styled from "styled-components";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const Cart = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <CartContent
          onCloseCartClick={props.onCloseCart}
          cartInfo={props.info}
        />,
        document.querySelector("#cart")
      )}
      {ReactDOM.createPortal(
        <Overlay onClick={props.onCloseCart} />,
        document.querySelector("#overlay")
      )}
    </Fragment>
  );
};

const CartContent = (props) => {
  return (
    <CartContainer>
      <CloseButton onClick={props.onCloseCartClick}>
        <i className="fas fa-times" />
      </CloseButton>
      <h1>Your Cart</h1>
      {props.cartInfo &&
        props.cartInfo.map((item) => {
          return <CartEntry key={item.item.id} info={item} />;
        })}
    </CartContainer>
  );
};

const CartEntry = (props) => {
  console.log(props.info);
  return (
    <CartEntryContainer key={props.info.item.id}>
      <div>
        <h3>{props.info.item.name}</h3>
        <p>Qty: {props.info.number}</p>
      </div>
      <button>X</button>
    </CartEntryContainer>
  );
};

const CartEntryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 10px;
  border-bottom: thin solid gray;

  button {
    font-size: 1.2rem;
    padding: 2px;
    background-color: transparent;
    border: none;
  }
`;

const CloseButton = styled.button`
  font-size: 2rem;
  padding: 0.5rem;
  border: none;
  background-color: transparent;

  position: absolute;
  right: 10px;
  top: 10px;
`;

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 400px;
  background-color: #f5f5f5;
  padding: 70px 30px;
  display: flex;
  flex-direction: column;

  z-index: 100;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);

  z-index: 50;
`;

export default Cart;
