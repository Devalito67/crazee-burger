import styled from "styled-components";
import Card from "../../pages/order/Card";
import { fakeMenu2 } from "../../data__mocked/fakeMenu";

export default function Main() {
  return (
    <MainStyled>
      {fakeMenu2 && fakeMenu2.map(element => (
        <Card
          key={element.id}
          imageSource={element.imageSource}
          title={element.title}
          price={element.price}
        />
      ))}
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background-color: #f5f5f5;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  border-radius: 0px 0px 15px 15px;
  flex: 1;
`;
