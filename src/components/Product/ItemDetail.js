import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemDetail = () => {
  let { id } = useParams();
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const itemResponse = await fetch(`https://fakestoreapi.com/products/${id}`);
    const itemData = await itemResponse.json();

    setItem(itemData);
    console.log(itemData);
  };

  useEffect(() => {
    fetchItem();
    console.log(id);
  }, []);

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt={`${item.title}`} />
    </div>
  );
};

export default ItemDetail;
