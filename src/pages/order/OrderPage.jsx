import styled from "styled-components"
import Navbar from "../../components/reusable-ui/Navbar"
import Main from "./Main"
import Admin from "../../components/admin/Admin"
import { useState } from "react"

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false)
  
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
        <Main />
        {isAdmin && <Admin />}
      </div>
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
