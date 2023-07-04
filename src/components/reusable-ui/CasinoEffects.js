import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { casinoAnimation } from "../../theme/animations";

export default function CasinoEffects({ count, className }) {
  return (
    <CasinoEffectsStyled>
      <TransitionGroup>
        <CSSTransition classNames={"count-animated"} timeout={300} key={count}>
          <span className={className}>{count}</span>
        </CSSTransition>
      </TransitionGroup>
    </CasinoEffectsStyled>
  );
}
const CasinoEffectsStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  span {
    display: inline-block;
  }
  ${casinoAnimation}
`;
