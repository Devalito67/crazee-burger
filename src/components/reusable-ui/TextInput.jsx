import styled from "styled-components"

export default function TextInput({ Icon, value, onChange, ...extraProps }) {
    return (
        <TextInputStyled >
            {Icon && Icon}
            <input value={value} onChange={onChange} type="text" {...extraProps} />
        </TextInputStyled>
    )
}

const TextInputStyled = styled.div `
      display: flex;
      width: 100%;
      border-radius: 5px;
      background-color: white;
      padding: 18px 24px;
      gap: 13px;
      align-items: center;
    input{
      width: 100%;
      font-size: 15px;
      &::placeholder {
        color: #D3D3D3;
      }
    };
    .icon{
      width: 18px;
      color: #93a2b1
    }
`