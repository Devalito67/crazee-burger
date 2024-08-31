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
      <div className="image"> {newProduct.imageSource ? <img src={newProduct.imageSource} alt="imageProduct preview" /> : "Aucune image"}</div>
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
/* border: 1px solid red; */
display: flex;
column-gap: 20px;
background-color: white;
width: 65%;
  .image {
    display: flex;
    flex-shrink: 0;
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
    display: grid;
    grid-row-gap: 8px;
    grid-template-rows: repeat(4, 1fr);
    width: 100%;
      div {
        align-items: center;
      }
      button {
        cursor: pointer;
        padding: 10px 29px;
        height: 100%;
        color: white;
        background-color: #60BD4F;
        font-weight: bold;
        font-size: 12px;
        border-radius: 5px;
      }
  }
  
`;