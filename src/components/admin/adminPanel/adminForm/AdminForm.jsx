import styled from "styled-components";
import SubmitMessage from "./SubmitMessage";
import TextInput from "../../../reusable-ui/TextInput";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { useContext } from "react";
import OrderPageContext from "../../../../context/OrderPageContext";
import { getAdminInputsConfig } from "./getAdminInputsConfig";

export default function AdminForm({ onSubmit, isSubmitted, onChange, value }) {
  const { selectedTab, isCardSelected, inputTitleRef } = useContext(OrderPageContext);
  const inputs = getAdminInputsConfig;

  return (
    <AdminFormStyled className="form" onSubmit={onSubmit}>
      {inputs.map((input) => (
        <TextInput
          key={input.key}
          name={input.name}
          value={value ? value[input.name] : ""}
          placeholder={input.placeholder}
          Icon={input.Icon}
          onChange={onChange}
          version="inputFormStyle"
          ref={input.name === "title" ? inputTitleRef : null} />
      ))}
      {(selectedTab === "addProduct") && <div><PrimaryButton label="Ajouter un nouveau produit au menu" version="successButtonStyle" />{isSubmitted && <SubmitMessage />}</div>}
      {(selectedTab === "editProduct" && isCardSelected) && <div className="hintFormMessage"><p>Cliquer sur un produit du menu pour le modifier <span>en temps réel</span></p></div>}
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
    .hintFormMessage {
      font-size: 15px;
      font-family: "Open Sans", sans-serif;
      color: #ffa01b;
      span {
        text-decoration: underline;
      }
    }
`;