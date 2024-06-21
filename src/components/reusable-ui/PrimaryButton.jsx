import styled from "styled-components"

export default function PrimaryButton({ label, Icon }) {
    return (
        <PrimaryButtonStyled >{label} {Icon && Icon}</PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.button`
      display: flex;
      width: 100%;
      border-radius: 5px;
      height: 53px;
      background-color: #ffa01b;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      color: white;
        &:hover:not(:disabled) {
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
`