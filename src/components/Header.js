import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const links = [
    { id: 1, name: "Products", to: "/products" },
    { id: 2, name: "Contact", to: "/contact" },
  ];

  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/">
          <h3>Logo</h3>
        </NavLink>
        <NavUnordered>
          {links.map((link) => {
            return (
              <NavLink key={link.id} to={link.to}>
                <li>{link.name}</li>
              </NavLink>
            );
          })}
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

  .current {
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
