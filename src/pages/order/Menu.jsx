import styled from "styled-components";
import Card from "../../components/reusable-ui/Card";
import { useContext } from "react";
import { formatPrice } from "../../utils/maths";
import OrderPageContext from "../../context/OrderPageContext";
import defaultImage from "/images/coming-soon.png";
import { EMPTY_PRODUCT } from "../../enums/product";

export default function Menu() {
    const { menu, setMenu, setIsCollapsed, setSelectedTab, setNewProduct, isCardSelected, setIsCardSelected, setSelectedCard, selectedCard, newProduct} = useContext(OrderPageContext)

    const handleSelectedCard = (e, id) => {
        e.stopPropagation();
        const copyMenu = [...menu];
        const cardSelected = copyMenu.find((cardMenu) => cardMenu.id === id);
        setSelectedTab("editProduct");
        setSelectedCard(cardSelected)
        setIsCardSelected(true);
        console.log('isCardSelected', isCardSelected)
        setNewProduct(cardSelected);
        setIsCollapsed(false);
    }

    const handleDeleteCard = (e, id) => {
        e.stopPropagation();
        const copyMenu = [...menu];
        const menuFiltered = copyMenu.filter((cardMenu) => cardMenu.id !== id);
        setMenu(menuFiltered);
        if (selectedCard.id === id){
        setNewProduct(EMPTY_PRODUCT);
        setIsCardSelected(false);}
    }

    return (
        <MenuStyled>
            {menu && menu.map(({ id, imageSource, title, price }) => {
                return <Card
                    key={id}
                    id={id}
                    imageSource={imageSource ? imageSource : defaultImage}
                    title={title ? title : '\u00A0'}
                    price={price ? formatPrice(price) : formatPrice(0)}
                    onDeleteClick={(e) => handleDeleteCard(e, id)}
                    onCardClick={(e) => handleSelectedCard(e, id)}
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
