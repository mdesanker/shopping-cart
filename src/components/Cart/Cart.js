import styled from "styled-components";
import ReactDOM from "react-dom";
import { Fragment, useEffect, useState } from "react";

const CartContent = (props) => {
  const [cartIDs, setCartIDs] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // console.log("cart", props.cartInfo);

  useEffect(() => {
    setCartIDs(props.cartInfo);

    const fetchItem = async (id) => {
      try {
        const itemResponse = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );
        const itemData = await itemResponse.json();

        console.log("cart", itemData);
        // setCartItems((prevState) => {
        //   return [...prevState, itemData];
        // });
        // console.log(cartItems);
      } catch (error) {
        console.log(error.message);
      }
    };

    // cartIDs.forEach((id) => {
    //   fetchItem(id);
    // });

    fetchItem(cartIDs.at(-1));
  }, [props.cartInfo]);

  return (
    <CartContainer>
      <CloseButton onClick={props.onCloseCartClick}>
        <i className="fas fa-times" />
      </CloseButton>
      <h1>Your Cart</h1>
      {cartIDs &&
        cartIDs.map((item) => {
          return <p key={item}>{item}</p>;
        })}
    </CartContainer>
  );
};

const Cart = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <CartContent
          onCloseCartClick={props.onCloseCart}
          cartInfo={props.cartDetails}
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
  position: absolute;
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