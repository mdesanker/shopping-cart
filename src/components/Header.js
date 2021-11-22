import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
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
            <button onClick={props.onOpenCart}>
              <i className="fas fa-shopping-cart"></i>
            </button>
          </li>
        </NavUnordered>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  background-color: gray;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

const NavUnordered = styled.ul`
  display: flex;
  align-items: center;
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

  button {
    font-size: 1rem;
    padding: 5px;
    border: none;
    background-color: transparent;
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
