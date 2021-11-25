import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const links = [
    { id: 1, name: "Products", to: "/products" },
    { id: 2, name: "Contact", to: "/contact" },
  ];

  const cartCount = props.cartInfo
    .map((item) => item.number)
    .reduce((acc, val) => acc + val, 0);

  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/shopping-cart">
          <Logo>ShopStore</Logo>
        </NavLink>
        <NavUnordered>
          {links.map((link) => {
            return (
              <NavLink key={link.id} to={`/shopping-cart${link.to}`}>
                <li>{link.name}</li>
              </NavLink>
            );
          })}
          <CartButton onClick={props.onOpenCart}>
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <Counter>{cartCount}</Counter>}
          </CartButton>
        </NavUnordered>
      </Nav>
    </HeaderContainer>
  );
};

const Counter = styled.p`
  position: relative;
  top: -8px;
  left: -8px;

  height: 20px;
  width: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.8rem;
  font-weight: 700;
  color: white;
  background-color: red;

  z-index: 10;
`;

const CartButton = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  background-color: transparent;
  border: none;
  margin-right: 20px;
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e5e5e5;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  width: 100%;
  max-width: 1200px;
`;

const NavUnordered = styled.ul`
  display: flex;
  align-items: center;
  gap: 2vw;

  & li {
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    list-style: none;
    padding: 20px;
  }
`;

const Logo = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  color: black;
  padding: 5px;
  text-transform: uppercase;
  border: 2px solid black;
  margin: 5px 20px;
`;

export default Header;
