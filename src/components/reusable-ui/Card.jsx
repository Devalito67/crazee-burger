import styled from "styled-components"
import { TiDelete } from "react-icons/ti"
import CardInfos from "./CardInfos"
import { useContext } from "react"
import OrderPageContext from "../../context/OrderPageContext"

export default function Card({ imageSource, title, price, id, onDeleteClick, onCardClick}) {
    const { isAdmin, selectedCard } = useContext(OrderPageContext)

    return (
        <CardStyled id={id} onClick={isAdmin ? onCardClick : null} className={`${(isAdmin && id !== selectedCard.id) ? "adminCardStyle" : ""} ${(isAdmin && id === selectedCard.id) ? "selectedCardStyle" : ""}`} >
            {isAdmin && <button className="deleteIcon" onClick={onDeleteClick}><TiDelete /></button>}
            <div className="picture-card">
                <img src={imageSource} alt={title} />
            </div>
            <CardInfos title={title} description={price} version= {`${(isAdmin && id === selectedCard.id) ? "selectedCardButtonStyle" : ""}`}/>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 330px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: 15px;
    align-items: center;
    padding: 50px 20px 10px;
    row-gap: 20px;
    background-color: white;
    position: relative;
        .deleteIcon {
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
        }
        .picture-card {
            height: 145px;
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                height: 145px;
                width: 100%;
                object-fit: contain;
            }
        }

    &.adminCardStyle { 
        &:hover {
            scale: 1.05;
            cursor: pointer;
            box-shadow: 0 0 8px 0 #ff9a23;
            background-color: rgba(255,255, 255, 0.2);
        }
    }

    &.selectedCardStyle {
        background-color: #ffa01b;
            &:hover {
                scale: 1.05;
            cursor: pointer;
            }
            .deleteIcon {
                color: white;
                background-color: transparent;
                cursor: pointer;
                    &:hover {
                        color: #E25549;
                    }
                    &:active {
                        color: white; 
                    }
            }
            .card-description  p {
                color: white;
            }
    }  
`