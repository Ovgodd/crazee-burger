import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

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
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 300ms;
  }

  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: 300ms;
  }
`;
