import styled from "styled-components";
import { useContext } from "react";
import AdminForm from "./AdminForm"; import AdminImagePreview from "./AdminImagePreview";
import OrderPageContext from "../../../../context/OrderPageContext";

export default function AdminEditProduct() {
  const { updatedProduct, setUpdatedProduct, setSelectedCard, updateCard } = useContext(OrderPageContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevState) => {
      const productToUpdate = {
        ...prevState,
        [name]: value,
      };
      setSelectedCard(productToUpdate);
      updateCard(productToUpdate);
      return productToUpdate;
    });
  }

  return (
    <AdminEditProductStyled>
      <AdminImagePreview imageSource={updatedProduct.imageSource} />
      <AdminForm onChange={handleInputChange} value={updatedProduct} />
    </AdminEditProductStyled>
  )
}

const AdminEditProductStyled = styled.div`
display: flex;
column-gap: 20px;
background-color: white;
height: 160px;
width: 65%;
`;