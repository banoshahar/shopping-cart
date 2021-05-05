import styled from "styled-components";

export const MainStyle = styled.div`
    .sm--hd {
        font-size: 24px;
        line-height: 32px;
    }
    .lg--para {
        font-size: 20px;
        line-height: 26px;
    }
    .md--para {
        font-size: 18px;
        line-height: 24px;
    }
    .normal--para {
        font-size: 16px;
        line-height: 22px;
    }
    .sm--para {
        font-size: 14px;
        line-height: 20px;
    }
    .dark--text {
        color: #111029;
    }
    .grey--text {
        color: #656161;
    }
    .blue--text {
        color: #403d92;
    }
    .purple--text {
        color: #4c40f7;
    }
    .font--medium {
        font-weight: 500;
    }
    .font--semiBold {
        font-weight: 600;
    }
    .flex--col-grow {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .interUi {
        font-family: "Inter UI";
    }
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .prd--card-btn {
        min-height: 40px;
        min-width: 80px;
        padding: 8px 12px;
        font-size: 14px;
        line-height: 18px;
        color: #ffffff;
        margin-right: 12px;
        font-family: "Inter UI";
    }
    .prd--card {
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
    .prd--card-ftr {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 8px 16px 24px 16px; 
    }

    .text-danger {
        font-size: 10px;
    }
    .text--danger {
        color:#dc3545;
    }
`;