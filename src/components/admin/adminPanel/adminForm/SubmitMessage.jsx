import { FiCheckCircle } from "react-icons/fi";
import styled from "styled-components";

export default function SubmitMessage() {
  return <SubmitMessageStyled>
    <FiCheckCircle /><span>Ajouté avec succès !</span>
  </SubmitMessageStyled>
}

const SubmitMessageStyled = styled.div`
        display: flex;
        column-gap: 5px;
        color: #60BD4F;
        padding-left: 10px;
        padding-right: 2px;
`;
