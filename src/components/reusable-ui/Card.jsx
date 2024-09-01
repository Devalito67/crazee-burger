import styled from "styled-components"
import PrimaryButton from "./PrimaryButton"
import { TiDelete } from "react-icons/ti"

export default function  Card({ imageSource, title, price, isAdmin, menu, setMenu, id}) {

    function onClick() {
        const menuFiltered= menu.filter((cardMenu) =>  cardMenu.id !== id);
        setMenu(menuFiltered)

    }

    return (
        <CardStyled >
            {isAdmin && <button className="deleteIcon" onClick={onClick}><TiDelete/></button>}
            <div className="picture-card">
                <img src={imageSource} alt={title} />
            </div>
            <div className="card-infos">
                <h2>{title}</h2>
                <div className="card-description">
                    <p>{price}</p>
                    <PrimaryButton label="Ajouter" />
                </div>
            </div>
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
        .card-infos{
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 5px 5px;
            flex-grow: 1;
                h2 {
                    font-family: "Amatic SC", cursive;
                    font-size: 36px;     
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    max-width: 100%;
                    overflow: hidden;
                }
        }
        .card-description {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: -7.5px;
            flex-grow: 1;
            p {
                color: #ffa01b;
                font-size: 16px;
                flex: 1;
            }
            button {
                flex:1;
                height: 38px;
                &:active {
                    color: white;
                    background-color: #ffa01b;
                }
            }
        }
`