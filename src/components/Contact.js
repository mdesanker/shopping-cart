import styled from "styled-components";

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <InfoContainer>
        <div>
          <i className="fas fa-map-marker-alt"></i>
          <p>123 StreetRoad</p>
        </div>
        <div>
          <i className="fas fa-phone"></i>
          <p>111 234 5678</p>
        </div>
      </InfoContainer>
      <ImageContainer />
    </ContactContainer>
  );
};

const InfoContainer = styled.div`
  display: flex;
  width: 50%;
  max-width: 600px;
  justify-content: space-evenly;
  padding: 20px 0;

  & div {
    display: flex;
    gap: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  max-width: 600px;
  height: 50%;
  background-color: gray;
  background-image: url("./images/map.png");
  background-size: cover;
  background-position: center;
`;

const ContactContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default Contact;
