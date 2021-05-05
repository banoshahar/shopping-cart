import { Dropdown } from 'react-bootstrap';
import styled from "styled-components";

export const NavContainer = styled.div`
    position: fixed;
  width: 100%;
  min-height: 62px;
  display: flex;
  align-items: center;
  background-color: #512da8;
  z-index: 2;
`;

export const NavButton = styled.div`
.nav--sm-btn {
  width: 100%;
  max-width: 160px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 0px;
}
.nav--sm-btn .hdr--btn {
  margin-right: 0px;
  margin-bottom: 12px;
}
.nav--sm-btn .hdr--btn:last-child {
  margin-bottom: 0px;
}
`;

export const DropDownNav = styled(Dropdown)`
.dropdown-toggle,
.btn-primary,
 .btn-primary:hover,
 .dropdown-toggle:hover,
 .btn-primary:not(:disabled):not(.disabled).active, 
.btn-primary:not(:disabled):not(.disabled):active,
.show>.btn-primary.dropdown-toggle {
  position: relative;
  padding: 0px;
  border: 1px solid transparent;
  background-color: transparent;
  margin-left: 16px;
}
 .dropdown-toggle .drpDn--img {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  overflow: hidden;
}
 .dropdown-toggle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
 .dropdown-toggle::after {
  margin-left: 10px;
  border-top: 7px solid;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
}
`;