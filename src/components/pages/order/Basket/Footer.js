import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Footer({ label, demo }) {
  return (
    <FooterStyled>
      <span>{label}</span>
      <span className="demo">{demo}</span>
    </FooterStyled>
  );
}
const FooterStyled = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 0px 15px;
  background: ${theme.colors.background_dark};

  font-family: ${theme.fonts.family.stylish};
  font-style: normal;
  font-weight: ${theme.fonts.weights.bold};
  font-size: ${theme.fonts.size.P2};
  line-height: 25px;
  color: ${theme.colors.white};
  .demo {
    color: ${theme.colors.greyMedium};
  }
`;
