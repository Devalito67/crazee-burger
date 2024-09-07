import styled from "styled-components";
import { useContext } from "react";
import { getAdminInputsConfig } from "./getAdminInputsConfig";
import AdminForm from "./AdminForm"; import AdminImagePreview from "./AdminImagePreview";
import OrderPageContext from "../../../../context/OrderPageContext";
export default function AdminEditProduct() {
  const { updatedProduct, setUpdatedProduct, setSelectedCard, setMenu } = useContext(OrderPageContext);
  const inputs = getAdminInputsConfig;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdatedProduct((prevState) => {
      const productToUpdate = {
        ...prevState,
        [name]: value,
      };
      setSelectedCard(productToUpdate);

      setMenu((prevMenu) => {
        const menuCardIndex = prevMenu.findIndex(
          (product) => product.id === updatedProduct.id
        );
        const updatedMenu = [...prevMenu];
        updatedMenu[menuCardIndex] = updatedProduct;
        return updatedMenu;
      });

      return updatedProduct;
    });
  }

  return (
    <AdminEditProductStyled>
      <AdminImagePreview imageSource={updatedProduct.imageSource} />
      <AdminForm inputs={inputs} handleChange={handleInputChange} />
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