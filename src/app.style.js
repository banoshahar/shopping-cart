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
    
    .text-danger {
        font-size: 10px;
    }
    .text--danger {
        color:#dc3545;
    }
    @font-face {
        font-family: 'Avenir Next LT Pro';
        src: url('AvenirNextLTPro-Regular.woff2') format('woff2'),
            url('AvenirNextLTPro-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Avenir Next LT Pro';
        src: url('AvenirNextLTPro-Bold.woff2') format('woff2'),
            url('AvenirNextLTPro-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Avenir LT Std';
        src: url('AvenirLTStd-Black.woff2') format('woff2'),
            url('AvenirLTStd-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Avenir LT Std';
        src: url('AvenirLTStd-Roman.woff2') format('woff2'),
            url('AvenirLTStd-Roman.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Avenir LT Std';
        src: url('AvenirLTStd-Book.woff2') format('woff2'),
            url('AvenirLTStd-Book.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }




`;