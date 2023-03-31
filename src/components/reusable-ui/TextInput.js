import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  variant = "normal",
  value,
  onChange,
  Icon,
  ...extraProps
}) {
  return (
    <TextInputStyled variant={variant}>
      {Icon && <div className="icon">{Icon}</div>}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  align-items: center;
  display: flex;
  background-color: white;
  border-radius: ${theme.borderRadius.round};
  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex;
    color: ${theme.colors.greyBlue};
  }
  input {
    width: 100%;
    border-radius: ${theme.borderRadius.round};
    border: none;
    font-family: "Open Sans", sans-serif;
    font-size: ${theme.fonts.size.SM};
    ::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  ${({ variant }) => extraStyle[variant]}
`;
const normalStyle = css`
  padding: 18px 28px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.greySemiDark};
  box-sizing: border-box;

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const minimalistStyle = css`
  padding: 8px 16px;
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  background: ${theme.colors.background_white};

  input {
    background: ${theme.colors.background_white};
    ::placeholder {
      color: ${theme.colors.greyMedium};
      font-family: "Arial";
      font-style: normal;
    }
  }

  .label {
    color: ${theme.colors.greyMedium};
  }
`;

const extraStyle = {
  normal: normalStyle,
  minimalist: minimalistStyle,
};
