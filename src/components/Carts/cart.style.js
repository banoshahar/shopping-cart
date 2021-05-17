import styled from "styled-components";
import { Button } from 'react-bootstrap';

export const CartMain = styled.div`
    margin-top: 62px;
    padding-top: 40px;
    padding-bottom: 40px;
`;

export const  CartHeading = styled.h2`
    font-size: 32px;
    line-height: 42px;

`;

export const ButtonStyled = styled(Button)`
    .prd--card-btn {
        min-height: 40px;
        min-width: 80px;
        padding: 8px 12px;
        font-size: 14px;
        line-height: 18px;
        color: #ffffff;
        margin-right: 12px;
        margin-left:5px;
        font-family: "Inter UI";
    }
`;

export const CartStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    background: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: 0px 4px 20px rgba(2, 5, 32, 0.2);
    border-radius: 12px;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    -ms-border-radius: 12px;
    -o-border-radius: 12px;
    margin-bottom: 16px;
  
`;