import React, { useState } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";
import productData from "../../assets/catalog.json";
import ProductMenu from "./ProductMenu";

const Products = (props) => {
  // States
  const [products, setProducts] = useState(productData);

  const setCategoryHandler = (e) => {
    const { id } = e.target;
    setProducts(() => {
      if (id === "all") return productData;
      else return productData.filter((product) => product.category === id);
    });
  };

  return (
    <Main>
      <DisplayContainer>
        <ProductMenu onCategoryClick={setCategoryHandler} />
        <CardContainer>
          {products.map((item) => {
            return (
              // <p>{item.name}</p>
              <ItemCard key={item.id} info={item} onAddItem={props.onAdd} />
            );
          })}
        </CardContainer>
      </DisplayContainer>
    </Main>
  );
};

// styled components
const Main = styled.main`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto 50px;
`;

const DisplayContainer = styled.div`
  display: flex;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-evenly;
  margin-left: 180px;
`;

export default Products;
