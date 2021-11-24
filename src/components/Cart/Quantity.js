import styled from "styled-components";

const QuantityModifier = (props) => {
  return (
    <QuantityModifierContainer>
      <button
        data-oper="dec"
        data-itemid={props.entry.item.id}
        onClick={props.onItemChange}
      >
        -
      </button>
      <p>{props.entry.number}</p>
      <button
        data-oper="inc"
        data-itemid={props.entry.item.id}
        onClick={props.onItemChange}
      >
        +
      </button>
    </QuantityModifierContainer>
  );
};

const QuantityModifierContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  & p {
    width: 40px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
  }

  & button {
    padding: 0;
    width: 40px;
    height: 40px;
    color: black;
    background-color: transparent;
    font-size: 1.6rem;
    font-weight: 700;
    transition: 100ms all;
  }

  & button:hover {
    color: black;
    background-color: #f5f5f5;
  }
`;

export default QuantityModifier;
