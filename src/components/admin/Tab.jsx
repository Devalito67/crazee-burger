import styled from "styled-components";

export default function Tab({icon, text, onClick}) {
  return (
    <TabStyled icon={icon} text={text} onClick={onClick}>
        <span>{icon}</span><span>{text}</span>
    </TabStyled>
  )
}

const TabStyled = styled.button`
  border: 2px solid green;
`;
