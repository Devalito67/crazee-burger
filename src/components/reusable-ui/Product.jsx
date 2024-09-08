import styled from "styled-components"
import ProductInfos from "./ProductInfos"

export default function Product({ imageSource, title, price, id/* , quantity */}) {

    return (
        <ProductStyled
            id={id}>
            <div className="picture-card">
                <img src={imageSource} alt={title} />
            </div>
            <ProductInfos
                title={title}
                description={price}
                /* quantity={quantity} */
            />
        </ProductStyled>
    )
}

const ProductStyled = styled.div`
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

`