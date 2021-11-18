import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <h3>Shop'd</h3>
        <ul>
          <li>Products</li>
          <li>Contact</li>
          <li>
            <i class="fas fa-shopping-cart"></i>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  width: 100%;
  max-width: 1200px;

  & h3 {
    padding: 20px;
    letter-spacing: 0.1rem;
  }

  & ul {
    display: flex;
    gap: 2vw;
  }

  & ul li {
    list-style: none;
    padding: 20px;
  }
`;

export default Header;
