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
    align-items: center;
    background-color: #F5F5F7;
    column-gap: 13px;
    padding: 8px 16px 8px 24px;
    color: #747B91;
    border-radius: 5px;
        input {
        color: #17161A;
        font-size: 15px; 
        background-color : transparent;
        font-family: Arial, Helvetica, sans-serif;
      }  
`;
