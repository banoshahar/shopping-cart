import styled from "styled-components";
import { Button } from 'react-bootstrap';


export const ButtonStyled = styled(Button)`
min-height: 40px;
border-radius: 8px;
min-width: 60px;
-webkit-border-radius: 8px;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-o-border-radius: 8px;
padding: 8px 12px;
font-size: 14px;
color: #ffffff;
margin-right: 12px;

.login--btn {
  background-color: #007bff;
  border: 1px solid #007bff;

  &.btn-secondary:focus, &.btn-secondary:hover, &.btn-secondary:not(:disabled):not(.disabled):active {
    background-color: #015dc5;
    border: 1px solid #015dc5;
    color: #ffffff;
  }
}
.signUp--btn {
  background-color: #6c757d;
  border: 1px solid #6c757d;

  &.btn-secondary:focus, &.btn-secondary:hover, &.btn-secondary:not(:disabled):not(.disabled):active {
    background-color: #5a6268;
    border: 1px solid #5a6268;
    color: #ffffff;
  }
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
&:not(:disabled):not(.disabled):active:focus,
&:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: none;
}
}
`;
 