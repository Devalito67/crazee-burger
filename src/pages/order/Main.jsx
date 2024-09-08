import styled from "styled-components";
import Menu from "./Menu"
import Admin from "../../components/admin/Admin";
import { useContext } from "react";
import OrderPageContext from "../../context/OrderPageContext";
import EmptyMenuMessage from "../../components/EmptyMenuMessage";
import Basket from "../../components/Basket/Basket";


export default function Main() {
  const { isAdmin, menu, resetMenu } = useContext(OrderPageContext)

  const handleInitializeMenuClick = () => {
    resetMenu()
  }

  const emptyMenuMessage = (isAdmin) => {
    return isAdmin ?
      <EmptyMenuMessage
        onClick={handleInitializeMenuClick}
        title="LE MENU EST VIDE ?"
        message="Cliquez ci-dessous pour le réinitialiser"
        labelButton="Générer de nouveaux produits" /> :
      <EmptyMenuMessage
        title="Victime de notre succès ! :D"
        message={
          <p>De nouvelles recettes sont en cours de préparation.
            <br />
            À très vite !</p>
        } />
  }

  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
      {menu && menu.length === 0 ? emptyMenuMessage(isAdmin) : <Menu />}
      {isAdmin && <Admin />}
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background-color: #f5f5f5;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  flex: 1;
  overflow: auto;
  display: flex;
    .menu-and-admin {
      overflow: hidden;
      width: 100%;
      position: relative;
      display: flex;
    }
`;
