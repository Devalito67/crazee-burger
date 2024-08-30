import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import OrderPageContext from "../../context/OrderPageContext";
import { useContext, useState } from "react";

export default function AdminAddProduct() {
  const { menu, setMenu } = useContext(OrderPageContext);
  const [newProduct, setNewProduct] = useState({
    id: "",
    imageSource: "",
    title: "",
    price: 0,
  })

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const updatedProduct = {
      id: crypto.randomUUID(),
      imageSource: e.target.productPicture.value || "../../../public/images/coming-soon.png",
      title: e.target.productName.value || '\u00A0',
      price: e.target.productPrice.value || 0.00,
    };

    setNewProduct(updatedProduct);

    const copyMenu = [updatedProduct,...menu];
    setMenu(copyMenu);

    console.log(updatedProduct);
  };

return (
  <AdminAddProductStyled>
    <div className="image">image</div>
    <form className="form" onSubmit={handleFormSubmit}>
      <div>
        <FaHamburger /><input name="productName" type="text" placeholder="Nom du produit (ex: Super Burger)" />
      </div>
      <div>
        <BsFillCameraFill /><input name="productPicture" type="text" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" />
      </div>
      <div>
        <MdOutlineEuro /><input name="productPrice" type="text" placeholder="Prix" />
      </div>
      <div><button>Ajouter un nouveau produit au menu</button></div>
    </form>
  </AdminAddProductStyled>
)
}

const AdminAddProductStyled = styled.div`
border: 1px solid red;
display: flex;
flex:1;

  .image {
    border: 1px solid green;
  }
  .form {
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    flex: 1;
      input {
        border: 1px solid darkblue;
        flex: 1;
        height: 100%;
      }
      div {
        display: flex;
        flex: 0.25;
        align-items: center;
      }
      button {
        cursor: pointer;
      }
  }
  
`;