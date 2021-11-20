import styled from "styled-components";

const ItemCard = (props) => {
  return (
    <Card>
      <ImageContainer>
        <ProductImage src={props.info.image} alt={props.info.title} />
      </ImageContainer>
      <LabelContainer>
        <Label>{props.info.title}</Label>
        <RatingLabel>{`Reviews: ${props.info.rating.rate}/5 (${props.info.rating.count})`}</RatingLabel>
        <PriceLabel>{`$${props.info.price.toFixed(2)}`}</PriceLabel>
      </LabelContainer>
    </Card>
  );
};

const Card = styled.div`
  width: 250px;
  height: 400px;
  padding-bottom: 20px;
  border-bottom: 2px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
`;

const ProductImage = styled.img`
  max-height: 90%;
  max-width: 90%;
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

const RatingLabel = styled(Label)`
  font-size: 1rem;
  color: #007185;
`;

const PriceLabel = styled(Label)`
  font-size: 1.3rem;
  font-weight: 700;
`;

export default ItemCard;