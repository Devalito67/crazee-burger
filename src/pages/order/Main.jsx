import styled from "styled-components";
import  Menu  from "./Menu"
import Admin from "../../components/admin/Admin";
import { useContext } from "react";
import OrderPageContext from "../../context/OrderPageContext";

export default function Main() {
  const { isAdmin} = useContext(OrderPageContext)

  return (
    <MainStyled>
      <Menu />
      {isAdmin && <Admin />}
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background-color: #f5f5f5;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  flex: 1;
  overflow: auto;
`;
