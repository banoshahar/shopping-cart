import { Form } from "react-bootstrap";
import styled from "styled-components";


export const LoginInner = styled.div`
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: 0px 4px 20px rgb(2 5 32 / 20%);
    border-radius: 12px;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    -ms-border-radius: 12px;
    -o-border-radius: 12px;
`;

export const LoginLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 120px;
    max-height: 120px;
    flex-shrink: 0;
    overflow: hidden;
    margin-bottom: 16px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const LoginForm = styled(Form)`
    min-width: 100px;
    font-size: 16px;
    margin-right: 0px;
    label {
        color: #512da8;
        font-weight: 400;
        font-size: 15px;
        font-family: "Inter UI";
        margin-bottom: 4px;
    }
`;