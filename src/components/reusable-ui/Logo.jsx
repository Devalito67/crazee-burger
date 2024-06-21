import styled from "styled-components"

export default function Logo() {
    return (
        <LogoStyled>
            <h1>CRAZEE</h1><img src="/src/assets/F03 logo-orange.png" alt="logo" /><h1>BURGER</h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    transform: scale(2.5);
        h1{
            font-family : "Amatic SC", cursive;
            color : #ffa01b;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 36px;
            letter-spacing: 1.5px;
            line-height: 1em;
        };
        img{
            height: 60px;
            width: 80px;
            margin: 0 5px;
        }

`
