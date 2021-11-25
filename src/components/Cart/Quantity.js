import styled from "styled-components";

const QuantityModifier = (props) => {
  return (
    <QuantityModifierContainer>
      <IncrementButton
        data-oper="dec"
        data-itemid={props.entry.item.id}
        onClick={props.onItemChange}
      >
        -
      </IncrementButton>
      <IncrementValue>{props.entry.number}</IncrementValue>
      <IncrementButton
        data-oper="inc"
        data-itemid={props.entry.item.id}
        onClick={props.onItemChange}
      >
        +
      </IncrementButton>
    </QuantityModifierContainer>
  );
};

const QuantityModifierContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 130px;
`;

const IncrementButton = styled.button`
  padding: 0;
  width: 40px;
  height: 40px;
  color: white;
  background-color: gray;
  font-size: 1.6rem;
  font-weight: 700;
  transition: 100ms all;
  border: none;

  &:hover {
    color: black;
    background-color: transparent;
  }
`;

const IncrementValue = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
`;

export default QuantityModifier;
