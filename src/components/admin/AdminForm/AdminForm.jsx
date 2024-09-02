import styled from "styled-components";
import Input from "../Input";
import SubmitMessage from "./SubmitMessage";

export default function AdminForm({ inputs, handleSubmit, isSubmitted, handleChange }) {
  return (
    <AdminFormStyled className="form" onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <Input key={input.key} name={input.name} placeholder={input.placeholder} icon={input.icon} onChange={handleChange} />
      ))}
      <div><button>Ajouter un nouveau produit au menu</button>{isSubmitted && <SubmitMessage />}</div>
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
`;