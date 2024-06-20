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
        h1{
            font-family : "Amatic SC";
            color : orange;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 110px;
        };
        img{
            height: 150px;
            width: 200px;
        }

`
