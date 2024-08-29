import styled from "styled-components";

export default function AdminAddProduct() {
  return (
    <AdminAddProductStyled>
      <div className="image">image</div>
      <div className="form">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <div>submit button</div>
      </div>

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
        flex: 0.25;
      }
      div {
        flex: 0.25;
      }
  }
  
`;