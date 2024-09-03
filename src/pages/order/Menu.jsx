import styled from "styled-components";
import Card from "../../components/reusable-ui/Card";
import { useContext } from "react";
import { formatPrice } from "../../utils/maths";
import OrderPageContext from "../../context/OrderPageContext";
import defaultImage from "/images/coming-soon.png";

export default function Menu() {
    const { menu, setMenu, isAdmin } = useContext(OrderPageContext)
    const handleDeleteCard = (id) => {
        const menuFiltered = menu.filter((cardMenu) => cardMenu.id !== id);
        setMenu(menuFiltered)
    }

    return (
        <MenuStyled>
            {menu && menu.map(({ id, imageSource, title, price }) => {
                return <Card
                    key={id}
                    imageSource={imageSource ? imageSource : defaultImage}
                    title={title ? title : '\u00A0'}
                    price={price ? formatPrice(price) : formatPrice(7)}
                    isAdmin={isAdmin}
                    onClick={() => handleDeleteCard(id)}
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
