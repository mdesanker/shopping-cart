import React, { Fragment, useEffect, useState } from "react";

const Products = () => {
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);

  const fetchData = async () => {
    try {
      // const response = await fetch(`https://swapi.dev/api/vehicles/`, {
      //   mode: "cors",
      // });

      const [vehicleResponse, starshipResponse] = await Promise.all([
        fetch(`https://swapi.dev/api/vehicles/`),
        fetch(`https://swapi.dev/api/starships/`),
      ]);

      // Error in fetch
      // if (!Response.ok) {
      //   const msg = `An error has occured: ${response.status}`;
      //   throw new Error(msg);
      // }
      if (!vehicleResponse.ok) {
        const msg = `An error has occured: ${vehicleResponse.status}`;
        throw new Error(msg);
      }
      if (!starshipResponse.ok) {
        const msg = `An error has occured: ${starshipResponse.status}`;
        throw new Error(msg);
      }

      // const data = await response.json();
      const vehicles = await vehicleResponse.json();
      const starships = await starshipResponse.json();

      setVehicles(vehicles.results);
      setStarships(starships.results);

      // console.log(vehicles.results);
      // console.log(starships);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <h1>Vehicles</h1>
      {vehicles.map((vehicle) => {
        return (
          <div key={vehicle.name}>
            <p>{vehicle.name}</p>
          </div>
        );
      })}
      <h1>Starships</h1>
      {starships.map((starship) => {
        return (
          <div key={starship.name}>
            <p>{starship.name}</p>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Products;
