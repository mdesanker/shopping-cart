import styled from "styled-components";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import CartEntry from "./CartEntry";

const Cart = (props) => {
  // console.log(props);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <CartContent
          onCloseCartClick={props.onCloseCart}
          cartInfo={props.info}
          subtotal={props.price}
          onRemoveItem={props.onDeleteItem}
          onChangeItem={props.onModifyItem}
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
  // console.log(props);

  return (
    <CartContainer>
      <CloseButton onClick={props.onCloseCartClick}>
        <i className="fas fa-times" />
      </CloseButton>
      <h1>Your Cart</h1>
      {props.cartInfo &&
        props.cartInfo.map((item) => {
          return (
            <CartEntry
              key={item.item.id}
              info={item}
              onCancelItem={props.onRemoveItem}
              onQuantityChange={props.onChangeItem}
            />
          );
        })}
      <Subtotal>{`Subtotal: $ ${
        props.subtotal ? props.subtotal.toFixed(2) : 0
      }`}</Subtotal>
      <CheckoutButton>Checkout</CheckoutButton>
    </CartContainer>
  );
};

const Subtotal = styled.h4`
  width: 100%;
  font-size: 1.1rem;
  padding-top: 20px;
  text-align: right;
`;

const CheckoutButton = styled.button`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.3rem;
  color: #e63946;
  border: 2px solid #e63946;
  background-color: transparent;
  padding: 20px;
  margin-top: 20px;
  transition: 200ms all;

  &:hover {
    color: white;
    background-color: #e63946;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  right: 0;
  height: 100vh;
  width: 400px;
  background-color: #f5f5f5;
  padding: 70px 30px;
  display: flex;
  flex-direction: column;

  z-index: 100;

  & h1 {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: thin solid gray;
    margin-bottom: 10px;
  }
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
