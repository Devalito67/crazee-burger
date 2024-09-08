import styled from "styled-components";
import Product from "./Product"
import { formatPrice } from "../../utils/maths";
import defaultImage from "/images/coming-soon.png";
import { useContext } from "react";
import OrderPageContext from "../../context/OrderPageContext";

export default function BasketProducts() {
  const { basket } = useContext(OrderPageContext)

  return (
    <BasketProductsStyled>
            {basket && basket.map(({ id, imageSource, title, price/* , quantity */ }) => {
                return <Product
                    key={id}
                    id={id}
                    imageSource={imageSource ? imageSource : defaultImage}
                    title={title}
                    price={price ? formatPrice(price) : formatPrice(0)}
                   /*  quantity={quantity} */
                />
            })}
        </BasketProductsStyled>
  )
}

const BasketProductsStyled = styled.div`
  
`;
