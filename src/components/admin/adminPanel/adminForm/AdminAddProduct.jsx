import styled from "styled-components";
import OrderPageContext from "../../../../context/OrderPageContext";
import { useContext, useState } from "react";
import { getAdminInputsConfig } from "./getAdminInputsConfig";
import AdminForm from "./AdminForm";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import AdminImagePreview from "./AdminImagePreview";

export default function AdminAddProduct() {
  const { menu, setMenu } = useContext(OrderPageContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputs = getAdminInputsConfig;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: crypto.randomUUID(),
      imageSource: e.target.imageSource.value,
      title: e.target.title.value,
      price: e.target.price.value,
    };

    setNewProduct(updatedProduct);
    const copyMenu = [updatedProduct, ...menu];
    setMenu(copyMenu);
    e.target.reset();
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
      <AdminForm inputs={inputs} handleSubmit={handleFormSubmit} isSubmitted={isSubmitted} handleChange={handleInputChange} />
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