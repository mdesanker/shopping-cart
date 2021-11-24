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
    // console.log(category);
    if (category === props.category) {
      return (
        <ActiveMenuItem
          key={category}
          id={category}
          activeClassName="selected"
          onClick={props.onCategoryClick}
        >
          {capitalize(category)}
        </ActiveMenuItem>
      );
    } else {
      return (
        <MenuItem
          key={category}
          id={category}
          activeClassName="selected"
          onClick={props.onCategoryClick}
        >
          {capitalize(category)}
        </MenuItem>
      );
    }
  });

  return (
    <MenuContainer>
      {/* <MenuHeader>Categories</MenuHeader> */}
      {props.category === "all" ? (
        <ActiveMenuItem id="all" onClick={props.onCategoryClick}>
          All
        </ActiveMenuItem>
      ) : (
        <MenuItem id="all" onClick={props.onCategoryClick}>
          All
        </MenuItem>
      )}
      {menu}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 150px;
  height: calc(100vh - 70px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // background-color: lightgray;
  padding-top: 4rem;
`;

const MenuHeader = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.5rem 0;
  border-bottom: 1px solid gray;
  margin-bottom: 0.5rem;
`;

const MenuItem = styled.button`
  font-size: 1rem;
  text-transform: uppercase;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  background-color: transparent;
  border: none;
  border-right: 4px solid transparent;

  &:hover {
    border-right: 4px solid black;
  }
`;

const ActiveMenuItem = styled(MenuItem)`
  border-right: 4px solid red;
  // border-bottom: 1px solid lightgray;
`;

export default ProductMenu;
