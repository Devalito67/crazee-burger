/* eslint-disable react/prop-types */
import styled from "styled-components";
import PrimaryButton from "./reusable-ui/PrimaryButton";

export default function EmptyMenuMessage({ onClick, title, message, labelButton }) {
    return (
        <EmptyMenuMessageStyled>
            <h2>{title}</h2>
            <div className="messageContainer">{message}</div>
            {labelButton && <PrimaryButton version label={labelButton} onClick={onClick} />}
        </EmptyMenuMessageStyled>
    )
}
const EmptyMenuMessageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    .messageContainer {
        text-align: center;
    }
`;
