import styled from "styled-components";
import OrderPageContext from "../../context/OrderPageContext";
import { useContext, useState } from "react";
import defaultImage from "../../../public/images/coming-soon.png";
import { getAdminInputsConfig } from "./getAdminInputsConfig";
import AdminForm from "./AdminForm/AdminForm";

export default function AdminAddProduct() {
  const { menu, setMenu } = useContext(OrderPageContext);
  const emptyProduct = {
    id: "",
    imageSource: "",
    title: "",
    price: 0,
  }
  const [newProduct, setNewProduct] = useState(emptyProduct);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputs = getAdminInputsConfig;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: crypto.randomUUID(),
      imageSource: e.target.imageSource.value || defaultImage,
      title: e.target.title.value || '\u00A0',
      price: e.target.price.value || 0.00,
    };

    setNewProduct(updatedProduct);
    const copyMenu = [updatedProduct, ...menu];
    setMenu(copyMenu);
    e.target.reset();
    setIsSubmitted(true);
    setNewProduct(emptyProduct)
    setTimeout(submitMessage, 2000)
  };

  const handleInputChange = (e, inputName) => {
    console.log(inputName);
    setNewProduct((prevState) => ({
      ...prevState,
      [inputName]: e.target.value,
    }));
  };

  const submitMessage = () => {
    setIsSubmitted(false)
  }


  return (
    <AdminAddProductStyled>
      <div className="image"> {newProduct.imageSource ? <img src={newProduct.imageSource} alt="imageProduct preview" /> : <div className="emptyImage">
        Aucune Image</div>}</div>
      <AdminForm inputs={inputs} handleSubmit={handleFormSubmit} isSubmitted={isSubmitted} handleChange={handleInputChange} />
    </AdminAddProductStyled>
  )
}

const AdminAddProductStyled = styled.div`
display: flex;
column-gap: 20px;
background-color: white;
width: 65%;
  .image {
    display: flex;
    flex-shrink: 0;
    width: 215px;
    height: 120px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .emptyImage {
        display: flex;
        color: #93A2B1;
        border: 1px solid #E4E5E9;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
  }
`;