import React from "react";
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import ProfileStyled from "./Profile";
export default function RightSide({ username }) {
  return (
    <RightSideStyled>
      <ToggleButton />
      <ProfileStyled username={username} />
    </RightSideStyled>
  );
}
const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
  /* background: pink;
  width: 500px;
  justify-content: space-between; */
`;
