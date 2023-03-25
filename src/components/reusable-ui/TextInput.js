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
    margin: 0 8px 0 1px;
    display: flex;
  }
  input {
    /* width: 330px; */
    width: 100%;
    border-radius: ${theme.borderRadius.round};
    border: none;
    font-family: "Open Sans", sans-serif;
    font-size: ${theme.fonts.size.SM};
    ::placeholder {
      /* font-size: ${theme.fonts.size.SM};
      font-weight: ${theme.fonts.weights.light}; */
      color: ${theme.colors.greyMedium};
    }
  }

  ${({ variant }) => extraStyle[variant]}
`;
const normalStyle = css`
  padding: 18px 24px;
  background-color: ${theme.colors.white};

  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;
const minimalistStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 8px 24px;
  box-sizing: border-box;
  gap: 5px;
  width: 100%;
  height: 35px;
  background: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  input {
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
    color: ${theme.colors.greyBlue};
  }
  .label {
    color: ${theme.colors.greyMedium};
  }
`;

const extraStyle = {
  normal: normalStyle,
  minimalist: minimalistStyle,
};
