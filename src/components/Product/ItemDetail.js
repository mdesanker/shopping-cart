import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const ItemDetail = () => {
  let { id } = useParams();
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    try {
      const itemResponse = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      const itemData = await itemResponse.json();

      setItem(itemData);
      console.log(itemData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchItem();
    console.log(item);
  }, []);

  return (
    <ItemContainer>
      <ImageContainer>
        <Image src={item.image} alt={`${item.title}`} />
      </ImageContainer>
      <DetailContainer>
        <Header>
          <h1>{item.title}</h1>
          <p>
            {item.rating &&
              `Rating: ${item.rating.rate}/5 (${item.rating.count})`}
          </p>
        </Header>
        <h3>About this item</h3>
        <p>{item.description}</p>
        <Price>{item.price && `$ ${item.price.toFixed(2)}`}</Price>
      </DetailContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.main`
  display: flex;
  max-width: 1600px;
  margin: 0 auto 50px;
`;

const ImageContainer = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
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

export default ItemDetail;
