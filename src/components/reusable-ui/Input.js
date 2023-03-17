import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Input({ Icon, label, type, value, onChange, name }) {
  return (
    <InputStyled>
      {Icon && <div className="icon">{Icon}</div>}
      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        name={name}
      />
    </InputStyled>
  );
}
const InputStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 8px 24px;
  box-sizing: border-box;
  gap: 13px;
  width: 645px;
  height: 35px;
  background: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  input {
    width: 577px;
    height: 19px;
    background: ${theme.colors.background_white};
    border: none;
    ::placeholder {
      font-weight: ${theme.fonts.weights.regular};
      font-size: ${theme.fonts.size.SM};
      background: ${theme.fonts.size.SM};
      color: ${theme.colors.greyMedium};
      font-family: "Arial";
      font-style: normal;
    }
  }
  .icon {
    display: flex;
    color: ${theme.colors.greyBlue};
  }
  .label {
    color: ${theme.colors.greyMedium};
  }
`;
