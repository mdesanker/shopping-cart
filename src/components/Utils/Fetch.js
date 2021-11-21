const fetchItem = async (id) => {
  try {
    const itemResponse = await fetch(`https://fakestoreapi.com/products/${id}`);
    const itemData = await itemResponse.json();

    console.log(itemData);
    return itemData;
  } catch (error) {
    console.log(error.message);
  }
};

export { fetchItem };
