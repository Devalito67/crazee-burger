import styled from "styled-components";
import OrderPageContext from "../../../../context/OrderPageContext";
import { useContext, useState } from "react";
import AdminForm from "./AdminForm";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import AdminImagePreview from "./AdminImagePreview";

export default function AdminAddProduct() {
  const { newProduct, setNewProduct, createCard } = useContext(OrderPageContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createCard();
    setNewProduct(EMPTY_PRODUCT)
    displaySubmitMessage();
  };

  const handleInputChange = (e) => {
    setNewProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const displaySubmitMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000)
  }

  return (
    <AdminAddProductStyled>
      <AdminImagePreview imageSource={newProduct.imageSource} />
      <AdminForm handleSubmit={handleFormSubmit} isSubmitted={isSubmitted} handleChange={handleInputChange} value ={newProduct}/>
    </AdminAddProductStyled>
  )
}

const AdminAddProductStyled = styled.div`
display: flex;
column-gap: 20px;
background-color: white;
height: 160px;
width: 65%;
`;