/* eslint-disable react/prop-types */
import styled from "styled-components";
import PrimaryButton from "./reusable-ui/PrimaryButton";

export default function EmptyMenuMessage({ onClick, title, message, labelButton }) {
    return (
        <EmptyMenuMessageStyled>
            <h4>{title}</h4>
            <div className="messageContainer">{message}</div>
            {labelButton && <PrimaryButton label={labelButton} onClick={onClick} />}
        </EmptyMenuMessageStyled>
    )
}
const EmptyMenuMessageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: "Amatic SC", cursive;
    color: #747B91;
    font-size: 36px;
    row-gap: 20px;
    width: 100%;
    .messageContainer {
        text-align: center;
    }
`;
