import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

export default function CasinoEffects({ count, className }) {
  return (
    <CasinoEffectsStyled>
      <TransitionGroup>
        <CSSTransition classNames={"count-animated"} timeout={5000} key={count}>
          <span className={className}>{count}</span>
        </CSSTransition>
      </TransitionGroup>
    </CasinoEffectsStyled>
  );
}
const CasinoEffectsStyled = styled.div`
  .count-animated-enter {
    background: green;
  }
  .count-animated-enter-active {
    background: blue;
    transition: 2s;
  }
  .count-animated-enter-done {
    background: pink;
  }

  .count-animated-exit {
    background: yellow;
  }
  .count-animated-exit-active {
    background: red;
    transition: 2s;
  }
`;
