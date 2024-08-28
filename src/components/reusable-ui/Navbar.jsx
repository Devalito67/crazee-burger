import styled from "styled-components";
import Logo from "./Logo";
import NavbarRightSide from "../NavbarRightSide";

export default function Navbar() {


  return (
    <NavbarStyled>
      <Logo className="logo" onClick={() => window.location.reload()}/>
      <NavbarRightSide />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding-left: 20px;
  padding-right: 70px;
    .logo{
      cursor: pointer;
    }
`;