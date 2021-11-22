import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";
import productData from "../../assets/catalog.json";
import ProductMenu from "./ProductMenu";

const Products = (props) => {
  // States
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [displayCategory, setDisplayCategory] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  // console.log(products);

  // Functions
  useEffect(() => {
    console.log(displayCategory);
  }, [displayCategory]);

  const setCategoryHandler = (e) => {
    const { id } = e.target;
    setDisplayCategory(() => {
      return products.filter((product) => product.category === id);
    });
  };

  const content = products.map((item) => {
    return <ItemCard key={item.id} info={item} onAddItem={props.onAdd} />;
  });

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

const MenuContainer = styled.div`
  position: fixed;
  top: 120px;
  width: 20%;
  max-width: 180px;
  min-height: 60vh;
  border-right: 1px solid gray;
  padding: 10px;
  display: flex;
  flex-direction: column;

  p {
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  text-align: left;
  padding: 3px;
  border: none;
  background: transparent;
  transition: 100ms all;

  &:hover {
    color: blue;
  }
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
