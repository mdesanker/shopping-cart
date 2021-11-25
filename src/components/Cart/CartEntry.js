import QuantityModifier from "./Quantity";
import styled from "styled-components";

const CartEntry = (props) => {
  // console.log(props.info);

  return (
    <CartEntryContainer key={props.info.item.id}>
      <div>
        <ItemName>{props.info.item.name}</ItemName>
        <ItemPrice>{`$ ${(props.info.item.price * props.info.number).toFixed(
          2
        )}`}</ItemPrice>
        <QuantityModifier
          entry={props.info}
          onItemChange={props.onQuantityChange}
        />
      </div>
      <DeleteButton id={props.info.item.id} onClick={props.onCancelItem}>
        X
      </DeleteButton>
    </CartEntryContainer>
  );
};

const CartEntryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 20px 10px;
  border-bottom: thin solid gray;
  // border: 1px solid red;
`;

const ItemName = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
`;

const ItemPrice = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  padding: 10px 0;
`;

const DeleteButton = styled.button`
  position: relative;
  top: 0px;
  right: 0px;
  font-size: 1.2rem;
  padding: 2px;
  background-color: transparent;
  border: none;
`;

export default CartEntry;
