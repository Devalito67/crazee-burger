import styled from "styled-components";

export default function HintEditFormMessage() {
   return <HintEditFormMessageStyled>
      <p>Cliquer sur un produit du menu pour le modifier <span>en temps réel</span></p>
    </HintEditFormMessageStyled>
  }

  const HintEditFormMessageStyled = styled.div`
   font-size: 15px;
      font-family: "Open Sans", sans-serif;
      color: #ffa01b;
      span {
        text-decoration: underline;
      }
  `;