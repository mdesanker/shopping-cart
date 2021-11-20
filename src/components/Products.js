import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";
import uniqid from "uniqid";

const Products = () => {
  const [content, setContent] = useState();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

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
      setContent(products);

      console.log("content", content);
      console.log(categories);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const filterHandler = (e) => {
    const { id } = e.target;
    console.log(id);
    setContent(
      products.filter((product) => {
        return product.category === id;
      })
    );
  };

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
        <ul>{menu}</ul>
      </SortMenu>
      <ProductContainer>
        {content.map((item) => {
          return <ItemCard key={item.id} info={item} />;
        })}
      </ProductContainer>
    </Main>
  );
};

const SortMenu = styled.div`
  width: 20%;
  background-color: gray;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export default Products;
