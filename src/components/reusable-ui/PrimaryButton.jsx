import styled, { css } from "styled-components"

export default function PrimaryButton({ label, Icon, onClick, version = "PrimaryButtonStyled" }) {
    return (
        <PrimaryButtonStyled version={version} onClick={onClick && onClick}>{label} {Icon && Icon}</PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.button`
    display: flex;
    border-radius: 5px;
    background-color: #ffa01b;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 500; 
    width : 224px;
    height: 50px;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
        &:hover/* :not(:disabled)  */{
            background-color: white;
            color: #ffa01b;
            border: 1px solid #ffa01b;
            transition: all 200ms ease-out;
        };
        &:active {
            color: white;
            background-color: #ffa01b;
            border: 1px solid #ffa01b;
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
    };
    
    ${(props) => buttonStyles[props.version]}
`

const loginButtonStyle = css`
    width: 100%;
    height: 53px;
    font-size: 15px;
`

const cardAddButtonStyle = css`
    flex:1;
    height: 38px;
    font-size: 15px;
`

const successButtonStyle = css`
    padding: 10px 29px;
    height: 100%;
    width: max-content;
    background-color: #60BD4F;
    font-size: 12px;
    border: 1px solid #60BD4F;
        &:hover {
            color: #60BD4F;
            background-color: white;
            border: 1px solid #60BD4F;
        }
        &:active {
            color: white;
            background-color: #60BD4F;
            border: 1px solid #60BD4F;
        }
`

const selectedCardButtonStyle = css`
    flex:1;
    height: 38px;
    font-size: 15px;
    background-color: white;
    color: #ffa01b;
        &:hover/* :not(:disabled)  */{
            background-color: #ffa01b;
            color: white;
            border: 1px solid white;
            transition: all 200ms ease-out;
        };
        &:active {
            color: #ffa01b;
            background-color: white;
            border: 1px solid #ffa01b;
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
    };
`

const buttonStyles = {
    loginButtonStyle,
    cardAddButtonStyle,
    successButtonStyle,
    PrimaryButtonStyled,
    selectedCardButtonStyle
}