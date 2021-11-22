import styled from "styled-components";

const ProductMenu = (props) => {
  return (
    <MenuContainer>
      <MenuItem id="all" onClick={props.onCategoryClick}>
        All
      </MenuItem>
      <MenuItem id="clothing" onClick={props.onCategoryClick}>
        Clothing
      </MenuItem>
      <MenuItem id="accessories" onClick={props.onCategoryClick}>
        Accessories
      </MenuItem>
      <MenuItem id="jewelry" onClick={props.onCategoryClick}>
        Jewelry
      </MenuItem>
      <MenuItem id="electronics" onClick={props.onCategoryClick}>
        Electronics
      </MenuItem>
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
