import styled from "styled-components";
import Menu from "./Menu"
import Admin from "../../components/admin/Admin";
import { useContext } from "react";
import OrderPageContext from "../../context/OrderPageContext";
import { fakeMenu2 } from "../../data__mocked/fakeMenu";

export default function Main() {
  const { isAdmin, menu, setMenu } = useContext(OrderPageContext)

  const handleInitializeMenuClick = () => {
    setMenu(fakeMenu2)
  }


  const emptyMenuMessage = (isAdmin) => {
    return isAdmin ?
      <div className="emptyMenuMessage">
        <h2>LE MENU EST VIDE ?</h2>
        <p>Cliquez ci-dessous pour le réinitialiser</p>
        <button onClick={handleInitializeMenuClick}>Générer de nouveaux produits</button>
      </div> :
      <div className="emptyMenuMessage">
        <h2>Victime de notre succès ! :D</h2>
        <p>De nouvelles recettes sont en cours de préparation.</p>
        <p>À très vite !</p>
      </div>
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
    .emptyMenuMessage {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
      }
`;
