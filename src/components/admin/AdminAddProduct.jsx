import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import OrderPageContext from "../../context/OrderPageContext";
import { useContext, useState } from "react";
import defaultImage from "../../../public/images/coming-soon.png";

export default function AdminAddProduct() {
  const { menu, setMenu } = useContext(OrderPageContext);
  const emptyProduct = {
    id: "",
    imageSource: "",
    title: "",
    price: 0,
  }
  const [newProduct, setNewProduct] = useState(emptyProduct)

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

    console.log(updatedProduct);
    e.target.reset();
    setNewProduct(emptyProduct)
  };

  const handleChange = (e, inputName) => {
    setNewProduct((prevState) => ({
      ...prevState,
      [inputName]: e.target.value,
    }));
  };

  return (
    <AdminAddProductStyled>
      <div className="image"> {newProduct.imageSource ? <img src={newProduct.imageSource} alt="Product" /> : "Aucune image"}</div>
      <form className="form" onSubmit={handleFormSubmit}>
        <div>
          <FaHamburger /><input name="title" type="text" placeholder="Nom du produit (ex: Super Burger)" />
        </div>
        <div>
          <BsFillCameraFill /><input name="imageSource" type="text" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" onChange={(e) => handleChange(e, "imageSource")} />
        </div>
        <div>
          <MdOutlineEuro /><input name="price" type="text" placeholder="Prix" />
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