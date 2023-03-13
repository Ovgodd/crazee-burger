import React from "react";
import styled from "styled-components";

export default function Input({ Icon, label, type, value, onChange }) {
  return (
    <InputStyled>
      {Icon && <div className="icon">{Icon}</div>}
      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
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
  background: #f5f5f7;
  border-radius: 5px;
  input {
    width: 577px;
    height: 19px;
    background: #f5f5f7;
    border: none;
    ::placeholder {
      font-weight: 400;
      font-size: 15px;
      color: #a7a8ad;
    }
  }
  .icon {
    display: flex;
    color: #747b91;
  }
  .label {
    color: #a7a8ad;
  }
`;
