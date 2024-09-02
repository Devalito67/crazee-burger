import styled, { css } from "styled-components"

export default function TextInput({ Icon, value, onChange, placeholder, version="normalStyle", ...extraProps }) {
    return (
        <TextInputStyled version={version}>
            <div className="icon">{Icon && Icon}</div>
            <input value={value} onChange={onChange} type="text" placeholder={placeholder} {...extraProps} />
        </TextInputStyled>
    )
}

const TextInputStyled = styled.div `
      display: flex;
      width: 100%;
      border-radius: 5px;
      column-gap: 13px;
      align-items: center;
    input{
      font-size: 15px;
      width: 100%;
    };
    .icon{
      width: 18px;
    }

    ${(props) => textInputStyles[props.version]}
`

const normalStyle = css`
    background-color: white;
    padding: 18px 24px;
    input{
      &::placeholder {
        color: #D3D3D3;
      }
    };
    .icon{
      color: #93a2b1
    }
`

const inputFormStyle = css`
  background-color: #F5F5F7;
  padding: 8px 16px 8px 24px;
  color: #747B91;
    input {
      color: #17161A;
      background-color : transparent;
      font-family: Arial, Helvetica, sans-serif;
      &:focus-visible {
        outline:none;
      }
    };
`
const textInputStyles = {
  normalStyle,
  inputFormStyle
}