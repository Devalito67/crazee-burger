import styled from "styled-components";
import Logo from "./Logo";

import NavbarRightSide from "../NavbarRightSide";

export default function Navbar({isAdmin, setIsAdmin}) {
  return (
    <NavbarStyled>
      <Logo className="logo" onClick={() => window.location.reload()}/>
      <NavbarRightSide isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding-left: 20px;
  padding-right: 70px;
  border-radius: 15px 15px 0 0;
    .logo{
      cursor: pointer;
    }
`;