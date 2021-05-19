import styled from "styled-components";

export const ProductStyled = styled.div`
    margin-top: 62px;
    padding-top: 40px;
    padding-bottom: 40px;

    .flex--col-grow {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
`;

export const ProductTitle = styled.div`
    font-size: 20px;
    line-height: 26px;
    color: #4c40f7;
    .hd--line {
        position: relative;
        padding-left: 38px;
        &::before {
            position: absolute;
            content: '';
            left: 0px;
            top: 50%;
            width: 30px;
            height: 2px;
            border-radius: 4px;
            background-color: #4c40f7;
            -webkit-border-radius: 8px;
            -moz-border-radius: 4px;
            -ms-border-radius: 4px;
            -o-border-radius: 4px;
        }
    }
`;

export const ProductHeading = styled.h1`
    font-size: 32px;
    line-height: 42px;
`;

export const ProductParagraph = styled.p`
    font-size: ${props => props.paragraph ? "16px" : "14px"};
    line-height:${props => props.paragraph ? "22px" : "20px"};
`;

export const ProductCard = styled.div`
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
    .prd--card-body {
        display: flex;
        flex-direction: column;
        padding: 16px;
    }
`;

export const ProductCardImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 12px 12px 0px 0px;
    -webkit-border-radius: 12px 12px 0px 0px;
    -moz-border-radius: 12px 12px 0px 0px;
    -ms-border-radius: 12px 12px 0px 0px;
    -o-border-radius: 12px 12px 0px 0px;
    margin-bottom: 8px;
`;

export const ProductCardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
`;

export const ProductCardFtr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 16px 24px 16px; 
`;

export const ProductCardParagraph =  styled.p`
    font-size: 18px;
    line-height: 24px;
`;
