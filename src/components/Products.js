import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);

      // Error in fetch
      if (!response.ok) {
        const msg = `An error has occured: ${response.status}`;
        throw new Error(msg);
      }

      const data = await response.json();

      setProducts(data);

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <h1>Products</h1>
      <ProductContainer>
        {products.map((item) => {
          return <ItemCard key={item.id} info={item} />;
        })}
      </ProductContainer>
    </Fragment>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Products;
