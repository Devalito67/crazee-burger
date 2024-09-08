import styled from "styled-components";

export default function ProductInfos({ title, description}) {

    return <ProductInfosStyled>
        <h6>{title}</h6>
        <div className="card-description">
            <p>{description}</p>
        </div>
        <div className="quantity"></div>
    </ProductInfosStyled>
}
const ProductInfosStyled = styled.div`
    display: flex;
    width:195px;
    padding: 0 20px;
    column-gap:13px;
    flex-direction: column;
        h6 {
            font-family: "Amatic SC", cursive;
            font-size: 24px;     
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
        }
        .card-description {
            display: flex;
            flex-grow: 1;
            p {
                color: #ffa01b;
                font-size: 15px;
                flex: 1;
            }
        }
        .quantity {
            width: 76px;
            height: 100%;
        }
`;