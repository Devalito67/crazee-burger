import { ToastContainer } from "react-toastify";
import { theme } from "../theme";
import styled from "styled-components";

export function ToastAdmin() {
  return <ToastContainerStyled bodyClassName="body-toast" />
}

const ToastContainerStyled = styled(ToastContainer)`
    max-width: 300px;
  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;