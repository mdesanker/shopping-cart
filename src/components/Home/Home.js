import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <LandingContainer>
        <div>
          <HomeLogo>ShopStore</HomeLogo>
          <Slogan>The one stop shop for all your store needs</Slogan>
        </div>
        <Link to="/shopping-cart/products">
          <ShopButton type="button">Shop</ShopButton>
        </Link>
      </LandingContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LandingContainer = styled.div`
  width: 100%;
  height: 60%;
  max-width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  padding-top: 3rem;
  padding-left: 10vw;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("./images/home-background.jpg");
  background-size: cover;
`;

const HomeLogo = styled.h1`
  font-size: 4rem;
  color: #023047;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
`;

const Slogan = styled.p`
  font-size: 1.5rem;
  color: #005f73;
  letter-spacing: 0.15rem;
`;

const ShopButton = styled.button`
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  padding: 0.5rem 2rem;
  margin: 3rem 0;

  transition: 200ms all;

  color: white;
  background-color: #023047;
  border: 3px solid #023047;

  &:hover {
    color: #023047;
    font-weight: 700;
    background-color: transparent;
  }
`;

export default Home;
