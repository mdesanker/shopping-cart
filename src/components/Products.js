import React, { Fragment, useEffect } from "react";

const Products = () => {
  const fetchData = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/vehicles/`, {
        mode: "cors",
      });

      // Error in fetch
      if (!response.ok) {
        const msg = `An error has occured: ${response.status}`;
        throw new Error(msg);
      }

      const data = await response.json();
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
      <h1>Hello from Products</h1>
    </Fragment>
  );
};

export default Products;
