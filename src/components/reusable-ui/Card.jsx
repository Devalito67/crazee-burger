import styled, { css } from "styled-components"
import CardInfos from "./CardInfos"

export default function Card({  id, onCardClick, version, button, imageSource, title, price, onAddProductClick }) {
    return (
        <CardStyled
            id={id}
            onClick={onCardClick}
            version={version}
        >
            {button && button}
            <div className="picture-card">
                <img src={imageSource} alt={title} />
            </div>
            <CardInfos
                title={title}
                description={price}
                version={version}
                onClick={onAddProductClick}
            />
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


    ${(props) => cardStyles[props.version]}
`

const selectCardStyle = css`
    background-color: #ffa01b;
            &:hover {
                scale: 1.05;
            cursor: pointer;
            }
            .card-description  p {
                color: white;
            }
`

const adminCardStyle = css`
    &:hover {
            scale: 1.05;
            cursor: pointer;
            box-shadow: 0 0 8px 0 #ff9a23;
            background-color: rgba(255,255, 255, 0.2);
        }
`

const cardStyles = {
    selectCardStyle,
    adminCardStyle,
}