import styled from "styled-components";
import Card from "../../components/reusable-ui/Card";
import { useContext} from "react";
import { formatPrice } from "../../utils/maths";
import OrderPageContext from "../../context/OrderPageContext";

export default function Menu() {
    const { menu } = useContext(OrderPageContext)
    
    return (
        <MenuStyled>
            {menu && menu.map(({ id, imageSource, title, price }) => {
            return <Card
                key={id}
                imageSource={imageSource}
                title={title}
                price={formatPrice( price )}
            />
})}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    padding: 50px 50px 150px;
    grid-row-gap: 60px;
    justify-items: center;
`;
