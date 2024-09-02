import styled from "styled-components";
import Menu from "./Menu"
import Admin from "../../components/admin/Admin";
import { useContext } from "react";
import OrderPageContext from "../../context/OrderPageContext";
import { fakeMenu2 } from "../../data__mocked/fakeMenu";
import EmptyMenuMessage from "../../components/EmptyMenuMessage";

export default function Main() {
  const { isAdmin, menu, setMenu } = useContext(OrderPageContext)

  const handleInitializeMenuClick = () => {
    setMenu(fakeMenu2)
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
      {menu && menu.length === 0 ? emptyMenuMessage(isAdmin) : <Menu />}
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
