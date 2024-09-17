import styled from "styled-components";
import Product from "../reusable-ui/Product"
import { formatPrice } from "../../utils/maths";
import defaultImage from "/images/coming-soon.png";
import { useContext } from "react";
import OrderPageContext from "../../context/OrderPageContext";

export default function BasketProducts() {
    const { basket, selectCard, isAdmin, selectedCard, deleteProduct} = useContext(OrderPageContext)
    const handleSelectedProduct = (e, id) => {
        e.stopPropagation();
        selectCard(id);
    };

    const onProductDelete = (e, id) => {
        e.preventDefault();
        deleteProduct(id);
    }

    return (
        <BasketProductsStyled>
            {basket && basket.map(({ id, imageSource, title, price, quantity }) => {
                const isSelected = id === selectedCard.id;
                return <Product
                    key={id}
                    id={id}
                    imageSource={imageSource ? imageSource : defaultImage}
                    title={title || '\u00A0'}
                    price={price ? formatPrice(price) : formatPrice(0)}
                    quantity={quantity}
                    onClick={isAdmin ? (e) => handleSelectedProduct(e, id) : null}
                    version={isAdmin && isSelected ? "selectProductStyle" : ""}
                    onDeleteClick={(e) => onProductDelete(e, id)}
                />
            })}
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    align-content: center;
    flex-wrap: wrap;
`;
