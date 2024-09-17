import styled from "styled-components";

export default function BasketSection({children, className}) {
    return (
        <BasketSectionStyled className={className}>
            {children}
        </BasketSectionStyled>
    )
}

const BasketSectionStyled = styled.div`
    display: flex;
    height: 70px;
    padding: 0 16px;
    background-color:#292729;
    font-family: "Amatic SC", sans-serif;
    font-weight: bold;
    align-items: center;
    &.basketHeader {
        font-size: 36px;
        justify-content: space-between;
        color: #FFA01B;
    }
    &.basketFooter {
        font-size: 20px;
        justify-content: center;
        color: white;
    }
`;
