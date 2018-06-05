// home-calls-to-action.js

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  edgePadding,
  WIDTH_TEXT_COLUMN_MAX,
  COLOR_BRAND_PRIMARY,
  FONT_SIZE_BASE,
  FONT_SIZE_LG,
  SPACING_BASE,
  SCREEN_SM_MIN,
  SCREEN_MD_MIN,
  FONT_SIZE_HERO,
  FONT_WEIGHT_DEMI
} from "../styleVariables";

ContentHeader.propTypes = {
  blurb: PropTypes.string,
  children: PropTypes.array,
  title: PropTypes.string,
  centered: PropTypes.bool
};

const ContentHeaderWrapper = styled.header`
  ${edgePadding};
  max-width: ${WIDTH_TEXT_COLUMN_MAX};
  text-align: left;
  margin-left: auto;
  margin-right: auto;

  ${props =>
    props.centered &&
    `
      @media all and (min-width: ${SCREEN_SM_MIN}) {
          text-align: center;
      }
    `};
`;

const ContentHeaderTitle = styled.h1`
  font-weight: ${FONT_WEIGHT_DEMI};
  font-size: ${FONT_SIZE_HERO};
  margin-bottom: 0.5em;
`;

const ContentHeaderBlurb = styled.h2`
  font-size: ${FONT_SIZE_BASE};
  margin: ${parseInt(SPACING_BASE, 10) / 2}px
          auto
          ${parseInt(SPACING_BASE, 10) * 2}px 0;
  max-width: 24em;
  font-weight: ${FONT_WEIGHT_DEMI};

  @media all and (min-width: ${SCREEN_MD_MIN}) {
    font-size: ${FONT_SIZE_LG};
  }

  ${props =>
    props.centered &&
    `
      @media all and (min-width: ${SCREEN_SM_MIN}) {
          text-align: center;
          margin-left: auto;
          max-width: 20em;
      }
    `} &:after {
    content: "";
    display: block;
    width: 8em;
    margin: 1em 0 2em;
    height: 0.15em;
    border-radius: 2em;
    background-color: ${COLOR_BRAND_PRIMARY};
  }
`;

export default function ContentHeader({
  children,
  title,
  blurb,
  centered = false
}) {
  return (
    <ContentHeaderWrapper centered={centered}>
      {children}
      <ContentHeaderTitle>{title}</ContentHeaderTitle>
      {blurb && (
        <ContentHeaderBlurb centered={centered}>{blurb}</ContentHeaderBlurb>
      )}
    </ContentHeaderWrapper>
  );
}
