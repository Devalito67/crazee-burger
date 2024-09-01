import styled from "styled-components";
import OrderPageContext from "../../context/OrderPageContext";
import { useContext, useState } from "react";
import defaultImage from "../../../public/images/coming-soon.png";
import Input from "./Input";
import { getAdminInputsConfig } from "./getAdminInputsConfig";
import { FiCheckCircle } from "react-icons/fi";

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

  const handleChange = (e, inputName) => {
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
      <form className="form" onSubmit={handleFormSubmit}>
        {inputs.map((input) => (
          <Input key={input.key} name={input.name} placeholder={input.placeholder} icon={input.icon} onChange={(e) => handleChange(e, input.name)} />
        ))}
        <div><button>Ajouter un nouveau produit au menu</button>{ isSubmitted && <div className="successMessage">
      <FiCheckCircle /><span>Ajouté avec succès !</span>
    </div>}</div>
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
  .form {
    display: grid;
    grid-row-gap: 8px;
    grid-template-rows: repeat(4, 1fr);
    width: 100%;
      div {
        display: flex;
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
        border: 1px solid #60BD4F;
        &:hover {
          color: #60BD4F;
          background-color: white;
        }
        &:active {
          color: white;
          background-color: #60BD4F;
        }
      }
      .successMessage {
        display: flex;
        column-gap: 5px;
        color: #60BD4F;
        padding-left: 10px;
        padding-right: 2px;
      }
  }
  
`;