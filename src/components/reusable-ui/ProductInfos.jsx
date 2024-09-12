import styled from "styled-components";

export default function ProductInfos({ title, description, quantity }) {

    return <ProductInfosStyled>
        <div className="card-description">
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
        <div className="quantity">x {quantity}</div>
    </ProductInfosStyled>
}
const ProductInfosStyled = styled.div`
    display: flex;
    width:200px;
    column-gap:11px;
    align-items: center;
    flex-shrink: 0;
        .card-description {
            display: flex;
            flex-direction: column;
            padding-left: 20px;
            flex-shrink: 0;
            width: 129px;
             h6 {
            font-family: "Amatic SC", cursive;
            font-size: 24px;     
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
        }
            p {
                color: #ffa01b;
                font-size: 15px;
                flex: 1;
            }
        }
        .quantity {
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: end;
            flex-shrink: 0;
            padding-right: 20px;
            color: #ffa01b;
        }
`;