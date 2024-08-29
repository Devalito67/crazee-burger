/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function Tab({ icon, label, onClick, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <span>{icon}</span>{label && <span>{label}</span>}
    </TabStyled>
  )
}

const TabStyled = styled.button`
  display: flex;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #E4E5E9;
  border-bottom: 2px solid #E4E5E9;
  padding: 10px 22px;
  column-gap: 13px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  box-shadow: 0 -6px 8px -2px rgba(0,0,0,0.1);
  cursor: pointer;
  color: #93A2B1;
  background-color: white;
    &:hover{
      text-decoration: underline solid 2px;
      text-underline-offset: 6px;
    }
    &.collapsed, &.selected{
    background-color: #292729;
    color: white;
    border: 1px solid #292729;
    border-bottom: 2px solid #292729;
    }
`;
