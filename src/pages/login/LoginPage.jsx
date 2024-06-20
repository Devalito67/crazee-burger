import styled from "styled-components";
import Logo from "../../components/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    return (
        <LoginPagestyled>
            <div>
                <Logo />
                <LoginForm />
            </div>

        </LoginPagestyled>
    )
}

const LoginPagestyled = styled.div `
display: flex;
height: 100vh;
width: 100%;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;

    &::before {
        content: "";
        background: url("src/assets/F03 burger-background.jpg") center / cover no-repeat ;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`