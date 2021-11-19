import React, { Fragment, useEffect, useState } from "react";

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
      {products.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </Fragment>
  );
};

export default Products;
