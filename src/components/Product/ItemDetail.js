import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import productData from "../../assets/catalog.json";

const ItemDetail = (props) => {
  let { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(productData[id]);
  }, []);

  return (
    <ItemContainer>
      <ImageContainer>
        <Image src={`.${item.image}`} alt={`${item.name}`} />
      </ImageContainer>
      <DetailContainer>
        <Header>
          <h1>{item.name}</h1>
          <p>
            {item.rating &&
              `Rating: ${item.rating.rate}/5 (${item.rating.count})`}
          </p>
        </Header>
        <h3>About this item</h3>
        <p>{item.description}</p>
        <Price>{item.price && `$ ${item.price.toFixed(2)}`}</Price>
        <AddContainer>
          <select
            name="quantity"
            id="quantity"
            onChange={props.onChangeQuantity}
          >
            <option value="1" defaultValue>
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button type="button" id={id} onClick={props.onAdd}>
            Add to Cart
          </button>
        </AddContainer>
      </DetailContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.main`
  display: flex;
  max-width: 1600px;
  margin: 0 auto 50px;
  padding-top: 100px;
`;

const ImageContainer = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 400px;
  // max-height: 100%;
  height: auto;
  width: 100%;
`;

const DetailContainer = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  h3 {
    padding-bottom: 10px;
  }

  ul {
    padding-left: 25px;
  }
`;

const Header = styled.div`
  padding: 0 1rem 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid gray;

  p {
    text-align: right;
    color: blue;
  }
`;

const Price = styled.h2`
  text-align: right;
  padding-top: 20px;
`;

const AddContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;

  select {
    font-size: 1rem;
    height: 2rem;
    text-align: center;
    width: 50px;
  }

  button {
    font-size: 1.2rem;
    font-weight: 700;
    padding: 10px 20px;
    color: white;
    background-color: #264653;
    border-radius: 5px;
    border: 2px solid #264653;
    transition: 100ms all;
  }

  button:hover {
    color: #264653;
    background-color: white;
  }
`;

export default ItemDetail;
