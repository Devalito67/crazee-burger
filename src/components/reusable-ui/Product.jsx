import styled from "styled-components"
import ProductInfos from "./ProductInfos"

export default function Product({ imageSource, title, price, id, quantity }) {

    return (
        <ProductStyled
            id={id}>
            <div className="picture-card">
                <img src={imageSource} alt={title} />
            </div>
            <ProductInfos
                title={title}
                description={price}
                quantity={quantity} 
            />
        </ProductStyled>
    )
}

const ProductStyled = styled.div`
    display: flex;
    width: 318px;
    height: 86px;
    box-shadow: -4px 4px 15px 0px rgb(0 0 0 / 20%);
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: white;
        .picture-card {
            height: 70px;
            width: 86px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                height: 70px;
                width: 100%;
                object-fit: contain;
            }
        }

`