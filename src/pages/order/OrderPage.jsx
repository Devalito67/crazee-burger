import styled from "styled-components"
import Navbar from "../../components/reusable-ui/Navbar"
import Main from "../../components/reusable-ui/Main"

export default function OrderPage() {
 

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div `
display: flex;
height: 100vh;
background-color: #ffa01b;
align-content: center;
justify-content: center;
  .container {
    width: 1400px;
    display: flex;
    flex-direction: column;
    height: 95vh;
  }
`
