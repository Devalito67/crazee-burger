import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

export default function CardInfos({ title, description }) {
    return <CardInfosStyled>
        <h2>{title}</h2>
        <div className="card-description">
            <p>{description}</p>
            <PrimaryButton version="cardAddButtonStyle" label="Ajouter" />
        </div>
    </CardInfosStyled>
}
const CardInfosStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 5px 5px;
    flex-grow: 1;
        h2 {
            font-family: "Amatic SC", cursive;
            font-size: 36px;     
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 100%;
            overflow: hidden;
        }
        .card-description {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: -7.5px;
            flex-grow: 1;
            p {
                color: #ffa01b;
                font-size: 16px;
                flex: 1;
            }
        }
`;
