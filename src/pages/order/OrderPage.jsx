import styled from "styled-components"
import Navbar from "../../components/reusable-ui/Navbar"
import Main from "./Main"
import { useState } from "react"
import OrderPageContext from "../../context/OrderPageContext"
import { fakeMenu2 } from "../../data__mocked/fakeMenu"
import { EMPTY_PRODUCT } from "../../enums/product"

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedTab, setSelectedTab] = useState("addProduct");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menu, setMenu] = useState(fakeMenu2);
  const [ selectedCard, setSelectedCard] = useState({});
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const orderPageContextValue = {
    isAdmin,
    setIsAdmin,
    menu,
    setMenu,
    isCollapsed,
    setIsCollapsed,
    selectedTab,
    setSelectedTab,
    selectedCard,
    setSelectedCard,
    newProduct,
    setNewProduct
  }

  return (
    <OrderPageStyled>
      <OrderPageContext.Provider value={orderPageContextValue}>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageContext.Provider>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
display: flex;
height: 100vh;
background-color: #ffa01b;
align-items: center;
justify-content: center;
  .container {
    width: 1400px;
    display: flex;
    flex-direction: column;
    height: 95vh;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
  }
`
