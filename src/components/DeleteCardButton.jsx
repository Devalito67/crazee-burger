import { TiDelete } from "react-icons/ti";
import styled, { css } from "styled-components";

export default function DeleteCardButton({onClick, version}) {
  return (
  <DeleteCardButtonSyled version={version} onClick={onClick}><TiDelete /></DeleteCardButtonSyled>)
}

const DeleteCardButtonSyled = styled.button`
position: absolute;
top: 15px;
right: 15px;
font-size: 30px;
color: #ffa01b;
background-color: transparent;
cursor: pointer;
    &:hover {
        color: #E25549;
    }

${(props) => deleteCardButtonStyle[props.version]}
`

const selectCardStyle = css`
color: white;
background-color: transparent;
cursor: pointer;
    &:hover {
        color: #E25549;
    }
    &:active {
        color: white; 
    }
`

const deleteCardButtonStyle= {
  selectCardStyle,
}