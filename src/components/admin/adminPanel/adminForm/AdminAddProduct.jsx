import styled from "styled-components";
import OrderPageContext from "../../../../context/OrderPageContext";
import { useContext, useState } from "react";
import AdminForm from "./AdminForm";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import AdminImagePreview from "./AdminImagePreview";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { getAdminInputsConfig } from "./getAdminInputsConfig";

export default function AdminAddProduct() {
  const { newProduct, setNewProduct, createCard, inputTitleRef } = useContext(OrderPageContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputs = getAdminInputsConfig;

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
    <AdminAddProductStyled >
      <AdminImagePreview imageSource={newProduct.imageSource} />
      <AdminForm
      inputs = {inputs}
      onSubmit={handleFormSubmit}
      isSubmitted={isSubmitted}
      onChange={handleInputChange}
      value={newProduct}
      Footer={<PrimaryButton label="Ajouter un nouveau produit au menu" version="successButtonStyle" />}
      ref={inputTitleRef}/>
    </AdminAddProductStyled>
  )
}

const AdminAddProductStyled = styled.div`
display: flex;
column-gap: 20px;
background-color: white;
height: 160px;
width: fit-content;
`;