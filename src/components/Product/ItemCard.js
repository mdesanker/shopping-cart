import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemCard = (props) => {
  return (
    <CardContainer>
      <Link to={`/products/${props.info.id}`}>
        <Card>
          <ImageContainer>
            <ProductImage src={props.info.image} alt={props.info.name} />
          </ImageContainer>
          <LabelContainer>
            <Label>{props.info.name}</Label>
            <PriceLabel>{`$${props.info.price.toFixed(2)}`}</PriceLabel>
          </LabelContainer>
        </Card>
      </Link>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  & a {
    color: black;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 350px;
  padding-bottom: 20px;
  border-bottom: 2px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10px 30px;
`;

const ProductImage = styled.img`
  max-height: 250px;
  max-width: 100%;
  width: auto;
  height: auto;
`;

const ImageContainer = styled.div`
  height: 250;
  width: 250;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 500;
`;

const PriceLabel = styled(Label)`
  font-size: 1.3rem;
  font-weight: 700;
`;

export default ItemCard;
