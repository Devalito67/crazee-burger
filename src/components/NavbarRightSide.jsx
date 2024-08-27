import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components"
import ToggleButton from "./ToggleButton"
import Signin from "./reusable-ui/Signin"
import { useState } from "react"
import { FaUserSecret } from "react-icons/fa"
import { ToastAdmin } from "./ToastAdmin"
import { toast } from "react-toastify"

export default function NavbarRightSide() {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    if (isChecked === true) {
      setIsChecked(false)
    } else if (isChecked === false) {
      setIsChecked(true)
      toast.info("Mode admin activé", {
        icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <NavbarRightSideStyled>
      < ToggleButton labelIfChecked="FERMER LE MODE ADMIN" labelIfUnchecked="OUVRIR LE MODE ADMIN" isChecked={isChecked} onToggle={handleToggle} />
      <Signin />
      <ToastAdmin />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
display: flex;
padding-top: 27px;
padding-bottom: 27px;
column-gap: 10px;

`
