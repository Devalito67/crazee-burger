import styled from "styled-components";
import SubmitMessage from "./SubmitMessage";
import TextInput from "../../../reusable-ui/TextInput";
import React from "react";

const AdminForm = React.forwardRef(({ onSubmit, isSubmitted, onChange, value, Footer, inputs}, ref) => {

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
          ref={input.name === "title" ? ref : undefined} />
      ))}
      <div>{Footer}{isSubmitted && <SubmitMessage />}</div>
    </AdminFormStyled>
  )
})

AdminForm.displayName = "Adminform"

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

export default AdminForm