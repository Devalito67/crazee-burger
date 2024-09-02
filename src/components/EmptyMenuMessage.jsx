import styled from "styled-components";

export default function EmptyMenuMessage({onClick, title, message, labelButton }) {
    return (
        <EmptyMenuMessageStyled>
            <h2>{title}</h2>
            <div className="messageContainer">{message}</div>
            <button onClick={onClick}>{labelButton}</button>
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
    button {
        cursor: pointer;
    }
`;
