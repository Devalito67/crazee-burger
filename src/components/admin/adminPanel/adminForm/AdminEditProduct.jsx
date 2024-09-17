import styled from "styled-components";
import { useContext } from "react";
import AdminForm from "./AdminForm"; import AdminImagePreview from "./AdminImagePreview";
import OrderPageContext from "../../../../context/OrderPageContext";
import { getAdminInputsConfig } from "./getAdminInputsConfig";
import HintEditFormMessage from "../../../HintEditFormMessage";

export default function AdminEditProduct() {
  const { updatedProduct, setUpdatedProduct, updateCard, isCardSelected, inputTitleRef, updateProduct } = useContext(OrderPageContext);
  const inputs = getAdminInputsConfig;
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevState) => {
      const productToUpdate = {
        ...prevState,
        [name]: value,
      };
      updateCard(productToUpdate);
      updateProduct(productToUpdate);
      return productToUpdate;
    });
  }

  return (
    <AdminEditProductStyled>
      <AdminImagePreview imageSource={updatedProduct.imageSource} />
      <AdminForm
        onChange={handleInputChange}
        value={updatedProduct}
        inputs={inputs}
        Footer={isCardSelected && <HintEditFormMessage />}
        ref={inputTitleRef} />
    </AdminEditProductStyled>
  )
}

const AdminEditProductStyled = styled.div`
display: flex;
column-gap: 20px;
background-color: white;
height: 160px;
width: fit-content;
`;