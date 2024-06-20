import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div className="divInput">
        <BsPersonCircle /><input value={inputValue} type="text" placeholder="Entrez votre prénom" onChange={handleChange} required />
      </div>
      <button type="submit">Accèdez à mon espace</button>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 464px;
  height: 438px;
  padding-bottom: 40px;
  padding-right: 32px;
  padding-left: 32px;
  padding-top: 65px;
  
    h1{
      font-family: "Amatic SC";
      font-size: 48px;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
    };
    hr{
      border: 1px solid orange;
      height: 3px;
      background-color: orange;
      width: 100%;
    };
    h2{
      font-family: "Amatic SC";
      font-size: 36px;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
      margin-top: 40px;
    };
    .divInput{
      display: flex;
      width: 100%;
      border-radius: 5px;
      background-color: white;
      padding: 18px 24px;
      gap: 13px;
      align-items: center;
    };
    input{
      font-family: "Open Sans";
      width: 100%;
      font-size: 15px;
      &::placeholder {
        color: #D3D3D3;
      }
    };
    button {
      display: flex;
      width: 100%;
      border-radius: 5px;
      height: 53px;
      background-color: orange;
      color: white;
      align-items: center;
      justify-content: center;
      font-size: 15px;
    }


`