import QuantityModifier from "./Quantity";
import styled from "styled-components";

const CartEntry = (props) => {
  // console.log(props.info);

  return (
    <CartEntryContainer key={props.info.item.id}>
      <div>
        <p>{props.info.item.name}</p>
        <h3>${props.info.item.price.toFixed(2)}</h3>
        <p>Qty: {props.info.number}</p>
        <QuantityModifier
          entry={props.info}
          onItemChange={props.onQuantityChange}
        />
      </div>
      <button id={props.info.item.id} onClick={props.onCancelItem}>
        X
      </button>
    </CartEntryContainer>
  );
};

const CartEntryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 10px;
  border-bottom: thin solid gray;
  // border: 1px solid red;

  & button {
    position: relative;
    top: 0px;
    right: 0px;
    font-size: 1.2rem;
    padding: 2px;
    background-color: transparent;
    border: none;
  }
`;

export default CartEntry;
