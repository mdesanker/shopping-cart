import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";
import uniqid from "uniqid";

const Products = () => {
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

      console.log("content", productDisplay);
      console.log(categories);
    } catch (error) {
      console.log(error.message);
    }
  };

  const filterHandler = (e) => {
    const { id } = e.target;
    console.log(id);
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
      <li id={category} key={uniqid()} onClick={filterHandler}>
        {category}
      </li>
    );
  });

  return (
    <Main>
      <h1>Products</h1>
      <SortMenu>
        <h2>Categories</h2>
        <ul>
          <li id="all" onClick={filterHandler}>
            all
          </li>
          {menu}
        </ul>
      </SortMenu>
      <ProductContainer>
        {productDisplay.map((item) => {
          return <ItemCard key={item.id} info={item} />;
        })}
      </ProductContainer>
    </Main>
  );
};

// styled components
const SortMenu = styled.div`
  width: 20%;
  background-color: gray;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export default Products;
