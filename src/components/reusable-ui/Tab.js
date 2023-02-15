import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ className, label, Icon, onClick }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      {Icon && <div className="icon">{Icon}</div>}
      {label && <span className="label">{label}</span>}
    </TabStyled>
  );
}
const TabStyled = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0 22px;
  height: 43px;
  left: 5%;

  position: relative;

  border-width: 1px 1px 0px 1px;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 2px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weights.regular};
  color: ${theme.colors.greySemiDark};
  background: ${theme.colors.white};
  cursor: pointer;
  margin-left: 1px;

  .label {
    margin-left: 13px;
  }

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }
`;
