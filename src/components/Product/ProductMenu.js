import styled from "styled-components";
import productData from "../../assets/catalog.json";

const ProductMenu = (props) => {
  // Get list of unique categories
  const categories = productData
    .map((product) => product.category)
    .filter((val, index, arr) => arr.indexOf(val) === index);

  const menu = categories.map((category) => {
    return (
      <MenuItem id={category} onClick={props.onCategoryClick}>
        {category}
      </MenuItem>
    );
  });

  return (
    <MenuContainer>
      <MenuItem id="all" onClick={props.onCategoryClick}>
        all
      </MenuItem>
      {menu}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 120px;
  height: calc(100vh - 70px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: lightgray;
  padding-top: 4rem;
`;

const MenuItem = styled.button`
  font-size: 1rem;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  // background-color: transparent;
  // border: none;
`;

export default ProductMenu;
