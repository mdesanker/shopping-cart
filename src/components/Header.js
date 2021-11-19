import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/">
          <h3>Shop'd</h3>
        </NavLink>
        <NavUnordered>
          <NavLink to="/products">
            <li>Products</li>
          </NavLink>
          <li>Contact</li>
          <li>
            <i className="fas fa-shopping-cart"></i>
          </li>
        </NavUnordered>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`;

const NavUnordered = styled.ul`
  display: flex;
  gap: 2vw;

  & li {
    color: black;
    list-style: none;
    padding: 20px;
  }

  & .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  width: 100%;
  max-width: 1200px;

  & h3 {
    color: black;
    padding: 20px;
    letter-spacing: 0.1rem;
  }
`;

export default Header;
