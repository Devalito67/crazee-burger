/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function Tab({icon, text, onClick, isSelected}) {
  return (
    <TabStyled onClick={onClick} className={isSelected ? "selected": ""}>
        <span>{icon}</span><span>{text}</span>
    </TabStyled>
  )
}

const TabStyled = styled.button`
  border: 2px solid green;
  cursor: pointer;
    &.selected{
    background-color: green;
    }
`;
