import styled from "styled-components";
import EmptyMenuMessage from "./EmptyMenuMessage";

export default function Basket() {
    return (
        <BasketStyled>
            <div className="basketHeader">Total<span>0,00 €</span></div>
            <div className="basketMain"><EmptyMenuMessage message="VOTRE COMMANDE EST VIDE." /></div>
            <div className="basketFooter">Codé avec ❤️ et React.JS</div>
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
    .basketHeader, .basketFooter {
        display: flex;
        height: 70px;
        padding: 0 16px;
        background-color:#292729;
        font-family: "Amatic SC", sans-serif;
        font-weight: bold;
        align-items: center;
    }
    .basketHeader {
        font-size: 36px;
        justify-content: space-between;
        color: #FFA01B;
    }
    .basketFooter {
        font-size: 20px;
        justify-content: center;
        color: white;
    }
`;