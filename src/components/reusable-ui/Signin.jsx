import { BsPersonCircle } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"


export default function Signin() {
    const { username } = useParams()
   

    return (
        <SigninStyled>   
            <div className="infos">
                <p>Hey, <b>{username}</b></p>
                <Link to="/"><button><small>Se déconnecter</small></button></Link>
            </div>
            <div className="picture">
                <BsPersonCircle />
            </div>
        </SigninStyled>
    )
}

const SigninStyled = styled.div`
    display: flex;
    color: #747B91;
    align-items: center;
    padding-left: 50px;
    gap: 10px;
        .infos {
            text-align: right;
            p {            
            font-size: 16px;
            text-transform: capitalize;
                b {
                    color: #ffa01b;
                };
            };
            button {
                background-color: white;
                color: #747B91;
                cursor: pointer;
                    &:hover {
                        text-decoration: underline;
                    };
            };
        };
        .picture {
            width: 36px;
            height: 36px;
            font-size:36px;
            color: #747B91;
        }
`