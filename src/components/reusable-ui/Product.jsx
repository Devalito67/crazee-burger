import styled from "styled-components"
import ProductInfos from "./ProductInfos"
import { MdDeleteForever } from "react-icons/md"
import { useContext } from "react"
import OrderPageContext from "../../context/OrderPageContext"

export default function Product({ imageSource, title, price, id, quantity }) {
    const { setBasket, basket } = useContext(OrderPageContext)
    const onProductDelete = (e, id) => {
        e.preventDefault();
        const updateBasket = basket.filter((product) => product.id !== id);
        setBasket(updateBasket);
    }


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
            <button className="delete-icon" onClick={(e) => onProductDelete(e, id)}>
                <MdDeleteForever />
            </button>
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
    position: relative;
    overflow: hidden;
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
        &:hover {
        cursor: pointer;

        .delete-icon {
            opacity: 1;
        }
    }
        .delete-icon {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        bottom: 0;
        color: white;
        background-color: #E25549;
        font-size: 24px;
        width: 76px;
        height: 100%;
        opacity: 0;
        transition: opacity 0.3s ease;
        cursor: pointer;
        &:hover {
            color: black;
        }
        &:active {
            color: white;
        }
    }
`