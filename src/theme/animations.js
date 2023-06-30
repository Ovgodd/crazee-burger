import { css } from "styled-components";
import { theme } from ".";

export const cardAnimation = css`
  .global-buttons-enter {
    transform: translateX(20px);
    opacity: 0%;
  }
  .global-buttons-enter-active {
    transform: translateX(0px);
    opacity: 100%;
    transition: ${theme.animations.speed.quick};
  }

  .global-buttons-exit {
    transform: translateX(0px);
    opacity: 100%;
  }
  .global-buttons-exit-active {
    transform: translateX(20px);
    opacity: 0%;
    transition: ${theme.animations.speed.quick};
  }
`;

export const adminAnimation = css`
  .admin-panel-enter {
    transform: translateY(251px);
    opacity: 0%;
  }
  .admin-panel-enter-active {
    opacity: 100%;
    transition: ${theme.animations.speed.quick};
    transform: translateY(0px);
  }
  .admin-panel-exit {
    opacity: 100%;

    transform: translateY(0px);
  }
  .admin-panel-exit-active {
    opacity: 0%;
    transition: ${theme.animations.speed.quick};
    transform: translateY(251px);
  }
`;
export const menuAnimation = css`
  .global-cards-enter {
    transform: translateX(-100px);
    opacity: 0%;
  }
  .global-cards-enter-active {
    transform: translateX(0px);
    opacity: 100%;
    transition: ${theme.animations.speed.quick};
  }
  .global-cards-exit {
    opacity: 100%;
  }
  .global-cards-exit-active {
    opacity: 0%;
    transition: ${theme.animations.speed.quick};
  }
`;
export const basketAnimation = css`
  .global-cards-appear {
    .unique-card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .global-cards-appear-active {
    .unique-card {
      transition: ${theme.animations.speed.quick};
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .global-cards-enter {
    .unique-card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .global-cards-enter-active {
    .unique-card {
      transition: ${theme.animations.speed.quick};
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .global-cards-exit {
    .unique-card {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .global-cards-exit-active {
    .unique-card {
      transition: ${theme.animations.speed.quick};
      transform: translateX(-100px);
      opacity: 0%;
    }
  }
`;
