import React from "react";
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import ProfileStyled from "./Profile";
export default function RightSide({ username }) {
  return (
    <RightSideStyled>
      <div className="toggle">
        <ToggleButton
          labelIfUnchecked="ACTIVER LE MODE ADMIN"
          labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        />
      </div>
      <ProfileStyled username={username} />
    </RightSideStyled>
  );
}
const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
  .toggle {
    margin-right: 50px;
  }
`;
