import React from "react";
import styled from "styled-components";
import ProfileStyled from "./Profile";
export default function RightSide({ username }) {
  return (
    <RightSideStyled>
      <ProfileStyled username={username} />
    </RightSideStyled>
  );
}
const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
`;
