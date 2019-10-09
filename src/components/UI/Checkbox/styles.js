import styled from "styled-components";

export const CheckboxContainer = styled.div``;

export const StyledLabel = styled.label`
  position: relative;
  padding: 0 0 0 60px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    width: 50px;
    height: 26px;
    border-radius: 13px;
    background: #cdd1da;
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }

  :after {
    content: "";
    position: absolute;
    top: -2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: 0.2s;
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 20px;
`;
