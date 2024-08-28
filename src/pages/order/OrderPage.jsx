import styled from "styled-components"
import Navbar from "../../components/reusable-ui/Navbar"
import Main from "./Main"
import Admin from "../../components/admin/Admin"
import { useState } from "react"
import OrderPageContext from "../../context/OrderPageContext"

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedTab, setSelectedTab] = useState("addProduct");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const orderPageContextValue = { isAdmin, setIsAdmin, isCollapsed, setIsCollapsed, selectedTab, setSelectedTab }


  return (
    <OrderPageStyled>
      <OrderPageContext.Provider value={orderPageContextValue}>
        <div className="container">
          <Navbar />
          <Main />
          {isAdmin && <Admin />}
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
  }
`
