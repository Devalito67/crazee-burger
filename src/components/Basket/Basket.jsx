import styled from "styled-components";
import EmptyMenuMessage from "../EmptyMenuMessage";
import BasketSection from "./BasketSection";

export default function Basket() {
    return (
        <BasketStyled>
            <BasketSection className="basketHeader">
                Total<span>0,00 €</span>
            </BasketSection>
            <div className="basketMain"><EmptyMenuMessage message="VOTRE COMMANDE EST VIDE." /></div>
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
    }
`;