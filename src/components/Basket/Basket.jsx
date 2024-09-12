import styled from "styled-components";
import EmptyMenuMessage from "../EmptyMenuMessage";
import BasketSection from "./BasketSection";
import { useContext } from "react";
import OrderPageContext from "../../context/OrderPageContext";
import BasketProducts from "../reusable-ui/BasketProducts";
import { basketAmount, formatPrice } from "../../utils/maths";

export default function Basket() {
    const { basket } = useContext(OrderPageContext)
    const total = basketAmount(basket);

    return (
        <BasketStyled>
            <BasketSection className="basketHeader">
                Total<span>{basket && basket.length === 0 ? formatPrice(0) : formatPrice(total)}</span>
            </BasketSection>
            <div className="basketMain">{basket && basket.length === 0 ? <EmptyMenuMessage message="VOTRE COMMANDE EST VIDE." /> : <BasketProducts />}</div>
            <BasketSection className="basketFooter">
                Codé avec ❤️ et React.JS
            </BasketSection>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  flex-shrink: 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2) inset;
    .basketMain {
        flex :1;
        overflow: auto;
    }
`;