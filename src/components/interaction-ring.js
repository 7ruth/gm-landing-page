// interaction-ring.js

import { COLOR_BRAND_PRIMARY } from "../styleVariables";

export default function InteractionRing(subjectBorderRadius, subjectDepth) {
  return `
    position: relative;

    &:after,
    &:before {
      opacity: 0;
      position: absolute;
      border-radius: ${parseInt(subjectBorderRadius, 10) + 4}px;
      transition: all 0.5s ease;
      transform: scale(0.99) translateY(1px);
      content: "";
      top: -6px;
      bottom: -6px;
      left: -6px;
      right: -6px;
      border: 2.5px solid ${COLOR_BRAND_PRIMARY};
      filter: drop-shadow(0 0 4px ${COLOR_BRAND_PRIMARY});
      will-change: transform;
    }

    &:before {
      border-width: 2px;
      z-index: 1;
    }

    &:hover,
    &:focus {
      &:after {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
      
    &:before {
      opacity: 0.3;
      border-top: 0;
      transform: scale(0.98) translateY(${parseInt(subjectDepth, 10) + 1}px);
      filter: drop-shadow(0 0 4px ${COLOR_BRAND_PRIMARY}) blur(1px);
    }
  }

  &:active {
    &:hover {
      &:after,
      &:before {
        transition: all 0s linear;
      }
    }

    &:after {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  `;
}
