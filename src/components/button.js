// button.js

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import interactionRing from "./interaction-ring";
import {
  FONT_WEIGHT_DEMI,
  COLOR_BRAND_PRIMARY,
  COLOR_CONTENT_BACKGROUND
} from "../styleVariables";

Button.propTypes = {
  children: PropTypes.array,
  href: PropTypes.string,
  label: PropTypes.string,
  offsite: PropTypes.bool
};

export const ButtonWrapper = styled.a.attrs({
  href: props => props.href
})`
  background-color: ${COLOR_BRAND_PRIMARY};
  color: ${COLOR_CONTENT_BACKGROUND};
  font-weight: ${FONT_WEIGHT_DEMI};
  border-radius: 100px;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  /* box-shadow: 0 4px 8px rgba(0,0,0,.5), 0 4px 16px rgba(0,0,0,.5); */
  user-select: none;

  &:hover,
  &:active,
  &:focus {
    color: ${COLOR_CONTENT_BACKGROUND};
    text-decoration: none;
  }

  ${interactionRing("100px", "4px")};
`;

export default function Button({ children, href, label, offsite }) {
  return (
    <ButtonWrapper href={href}>
      {label}
      {children}
    </ButtonWrapper>
  );
}
