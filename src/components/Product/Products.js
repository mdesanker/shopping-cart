import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";
import uniqid from "uniqid";

const Products = (props) => {
  // States
  const [productDisplay, setProductDisplay] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Functions
  const fetchAPI = async () => {
    try {
      const [productResponse, categoryResponse] = await Promise.all([
        fetch(`https://fakestoreapi.com/products`),
        fetch(`https://fakestoreapi.com/products/categories`),
      ]);

      // Error in fetch
      if (!productResponse.ok) {
        const msg = `An error has occured: ${productResponse.status}`;
        throw new Error(msg);
      }
      if (!categoryResponse.ok) {
        const msg = `An error has occured: ${categoryResponse.status}`;
        throw new Error(msg);
      }

      const products = await productResponse.json();
      const categories = await categoryResponse.json();

      setProducts(products);
      setCategories(categories);
      setProductDisplay(products);

      // console.log("content", productDisplay);
      // console.log(categories);
    } catch (error) {
      console.log(error.message);
    }
  };

  const filterHandler = (e) => {
    const { id } = e.target;
    // console.log(id);
    if (id === "all") setProductDisplay(products);
    else
      setProductDisplay(
        products.filter((product) => {
          return product.category === id;
        })
      );
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  let menu = categories.map((category) => {
    return (
      <Button id={category} key={uniqid()} onClick={filterHandler}>
        {category}
      </Button>
    );
  });

  return (
    <Main>
      <DisplayContainer>
        <MenuContainer>
          <p>Categories</p>
          <Button id="all" onClick={filterHandler}>
            all
          </Button>
          {menu}
        </MenuContainer>
        <CardContainer>
          {productDisplay.map((item) => {
            return (
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
