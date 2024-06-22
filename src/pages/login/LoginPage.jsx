import styled from "styled-components";
import Logo from "../../components/reusable-ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    return (
        <LoginPagestyled>
            <Logo className="logo"/>
            <LoginForm />
        </LoginPagestyled>
    )
}

const LoginPagestyled = styled.div`
display: flex;
height: 100vh;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;

    &::before {
        content: "";
        background: url("/burger-background.jpg") center / cover no-repeat rgba(0,0,0,0.7);
        background-blend-mode: darken;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    };
    .logo {
        transform :scale(2.5)
    }
`