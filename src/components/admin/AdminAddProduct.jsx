import styled from "styled-components";
import OrderPageContext from "../../context/OrderPageContext";
import { useContext, useState } from "react";
import defaultImage from "../../../public/images/coming-soon.png";
import Input from "./Input";
import { getAdminInputsConfig } from "./getAdminInputsConfig";

export default function AdminAddProduct() {
  const { menu, setMenu } = useContext(OrderPageContext);
  const emptyProduct = {
    id: "",
    imageSource: "",
    title: "",
    price: 0,
  }
  const [newProduct, setNewProduct] = useState(emptyProduct)
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
    setNewProduct(emptyProduct)
  };

  const handleChange = (e, inputName) => {
    console.log(inputName);
    setNewProduct((prevState) => ({
      ...prevState,
      [inputName]: e.target.value,
    }));
  };


  return (
    <AdminAddProductStyled>
      <div className="image"> {newProduct.imageSource ? <img src={newProduct.imageSource} alt="Product" /> : "Aucune image"}</div>
      <form className="form" onSubmit={handleFormSubmit}>
        {inputs.map((input) => (
          <Input key={input.key} name={input.name} placeholder={input.placeholder} icon={input.icon} onChange={(e) => handleChange(e, input.name)} />
        ))}
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
    display: flex;
    border: 1px solid #E4E5E9;
    width: 215px;
    height: 120px;
    justify-content: center;
    align-items: center;
    color: #93A2B1;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
  }
  .form {
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    flex: 1;
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