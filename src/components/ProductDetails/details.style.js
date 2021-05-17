import styled from "styled-components";

export const ProductDetailsMain = styled.div`
    margin-top: 62px;
    padding-top: 40px;
    padding-bottom: 40px;
`;

export const ProductCardView = styled.div`
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  .prd--card-img {
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
        img {
        width: 100%;
        height: 100%;
        }
    }
  .prd--card{
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
  }
  
`;

export const ProductCardFtr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 16px 24px 16px; 
  
`;