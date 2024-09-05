import styled from "styled-components";
import SubmitMessage from "./SubmitMessage";
import TextInput from "../../../reusable-ui/TextInput";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { useContext } from "react";
import OrderPageContext from "../../../../context/OrderPageContext";

export default function AdminForm({ inputs, handleSubmit, isSubmitted, handleChange }) {
  const { newProduct } = useContext(OrderPageContext);
  return (
    <AdminFormStyled className="form" onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <TextInput
        key={input.key}
        name={input.name}
        value={newProduct[input.name]}
        placeholder={input.placeholder}
        Icon={input.Icon}
        onChange={handleChange}
        version="inputFormStyle"/>
      ))}
      <div><PrimaryButton label="Ajouter un nouveau produit au menu" version="successButtonStyle"/>{isSubmitted && <SubmitMessage />}</div>
    </AdminFormStyled>
  )
}

const AdminFormStyled = styled.form`
    display: grid;
    grid-row-gap: 8px;
    grid-template-rows: repeat(4, 1fr);
    width: 100%;
      div {
        display: flex;
        align-items: center;
      }
`;