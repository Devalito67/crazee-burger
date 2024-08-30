import styled from "styled-components";

export default function Input({ name, placeholder, icon, onChange }) {
    return (
        <InputStyled>
            {icon}<input name={name} type="text" placeholder={placeholder} onChange={onChange}/>
        </InputStyled>
    )
}

const InputStyled = styled.div`
    display: flex;
    flex: 0.25;
    align-items: center;
        input {
        border: 1px solid darkblue;
        flex: 1;
        height: 100%;
      }  
`;
