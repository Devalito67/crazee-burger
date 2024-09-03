import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../components/reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../../components/reusable-ui/PrimaryButton";

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
      <TextInput 
        Icon={<BsPersonCircle/>}
        value={inputValue}
        placeholder="Entrez votre prénom"
        onChange={handleChange}
        version="normalStyle"
        required
        />
      <PrimaryButton
        label="Accéder à mon espace"
        Icon={<IoChevronForward className="icon"/>}
        version="loginButtonStyle"
        />
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
  font-family: "Amatic SC", cursive;
  justify-content: space-between;

    h1{
      font-size: 48px;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
    };
    hr{
      border: 1px solid orange;
      height: 3px;
      background-color: #ffa01b;
      width: 100%;
    };
    h2{
      font-size: 36px;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
      margin-top: 40px;
    };
    .icon {
      margin-left: 10px;
    }
`