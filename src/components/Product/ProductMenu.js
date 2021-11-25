import { useState } from "react";
import styled from "styled-components";
import productData from "../../assets/catalog.json";

const ProductMenu = (props) => {
  // Get list of unique categories
  const categories = productData
    .map((product) => product.category)
    .filter((val, index, arr) => arr.indexOf(val) === index);

  const capitalize = (string) => {
    const arr = string.toLowerCase().split("");
    return arr[0].toUpperCase() + arr.slice(1).join("");
  };

  const menu = categories.map((category) => {
    // console.log(props.category === category);

    return (
      <MenuItem
        key={category}
        id={category}
        active={props.category === category ? true : false}
        onClick={props.onCategoryClick}
      >
        {capitalize(category)}
      </MenuItem>
    );
  });

  return (
    <MenuContainer>
      <MenuItem
        id="all"
        active={props.category === "all" ? true : false}
        onClick={props.onCategoryClick}
      >
        All
      </MenuItem>
      {menu}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: fixed;
  top: 100px;
  left: 5px;
  width: 170px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid gray;
`;

const MenuItem = styled.button`
  font-size: 1rem;
  text-align: left;
  text-transform: uppercase;
  width: 100%;
  padding: 15px;
  margin: 5px 0;
  background-color: transparent;
  border: none;
  border-right: 4px solid ${(props) => (props.active ? "red" : "transparent")};

  &:hover {
    border-right: 4px solid black;
  }
`;

export default ProductMenu;
