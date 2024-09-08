import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";

export default function HintMessage() {
   return <HintMessageStyled>
      Cliquez sur un produit du menu pour le modifier <HiCursorClick />
    </HintMessageStyled>
  }

  const HintMessageStyled = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-family: "Amatic SC", cursive;
    color: #747b91;
    height: 100%;
    column-gap: 10px;
  `;