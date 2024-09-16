import styled from "styled-components";
import Card from "../../components/reusable-ui/Card";
import { useContext } from "react";
import { formatPrice } from "../../utils/maths";
import OrderPageContext from "../../context/OrderPageContext";
import defaultImage from "/images/coming-soon.png";
import DeleteCardButton from "../../components/DeleteCardButton";

export default function Menu() {
    const {
        isAdmin,
        menu,
        selectCard,
        deselectCard,
        addToBasket,
        deleteCardAndProduct,
        selectedCard
    } = useContext(OrderPageContext);

    function getCardVersion(isAdmin, isSelected) {
        if (isAdmin && isSelected) return "selectCardStyle";
        if (isAdmin) return "adminCardStyle";
        return "";
    }

    const handleSelectedCard = (e, id) => {
        e.stopPropagation();
        selectCard(id);
    };

    const handleDeleteCard = (e, id) => {
        e.stopPropagation();
        deleteCardAndProduct(id);
        if (selectedCard.id === id) {
            deselectCard();
        }
    };

    const handleAddProduct = (e, id) => {
        e.stopPropagation();
        addToBasket(id);
    };
    return (
        <MenuStyled>
            {menu && menu.map(({ id, imageSource, title, price }) => {
                const isSelected = id === selectedCard.id;
                const cardVersion = getCardVersion(isAdmin, isSelected);
                return <Card
                    key={id}
                    id={id}
                    imageSource={imageSource || defaultImage}
                    title={title || '\u00A0'}
                    price={price ? formatPrice(price) : formatPrice(0)}
                    onCardClick={isAdmin ? (e) => handleSelectedCard(e, id) : null}
                    onAddProductClick={(e) => handleAddProduct(e, id)}
                    version={cardVersion}
                    button={
                        isAdmin && (
                            <DeleteCardButton
                                onClick={(e) => handleDeleteCard(e, id)}
                                version={cardVersion} />)}
                />
            })}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    background: #F5F5F7;
    width: 100%;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    padding: 50px 50px 150px;
    grid-row-gap: 60px;
    justify-items: center;
    overflow: auto;
`;
