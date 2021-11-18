import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright © 2021 mdesanker</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;

  & p {
    padding: 5px;
  }
`;

export default Footer;
