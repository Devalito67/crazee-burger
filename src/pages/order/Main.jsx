import styled from "styled-components";
import  Menu  from "./Menu"

export default function Main() {
  return (
    <MainStyled>
      <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background-color: #f5f5f5;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  border-radius: 0px 0px 15px 15px;
  flex: 1;
  overflow: auto;
`;
