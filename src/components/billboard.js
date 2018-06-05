import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  COLOR_HIGHLIGHT,
  COLOR_CONTENT,
  COLOR_CONTENT_BACKGROUND,
  FONT_WEIGHT_MEDIUM,
  FONT_WEIGHT_DEMI,
  FONT_SIZE_BASE,
  FONT_SIZE_HERO,
  FONT_SIZE_LG,
  FONT_SIZE_HERO_LG,
  SCREEN_SM_MIN,
  SCREEN_MD_MIN,
  SCREEN_LG_MIN,
  SPACING_BASE,
  WIDTH_TEXT_COLUMN_MAX,
  edgePadding,
  contentVerticalSpacing,
} from '../styleVariables';

Billboard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  id: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export const BillboardWrapper = styled.header`
  background-color: ${COLOR_CONTENT};
  color: ${COLOR_CONTENT_BACKGROUND};
  min-height: calc(${contentVerticalSpacing} * 5);
  padding: ${contentVerticalSpacing} ${SPACING_BASE};
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  text-rendering: optimizeLegibility;

  > * {
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .background {
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

    video,
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:after {
    z-index: -1;
    position: fixed;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background-color: inherit;
  }

  .video {
    margin: 3em auto 1em;
    overflow: hidden;
    position: relative;
    width: 620px;
    height: calc(620px * 0.5675);

    @media all and (max-width: 620px) {
      width: 100%;
      padding-bottom: 56.75%;
      margin: 2em 0 0;
      height: auto;
    }

    iframe {
      background-color: #000;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export const BillboardTitle = styled.h1`
  font-size: ${FONT_SIZE_HERO};
  font-weight: ${FONT_WEIGHT_MEDIUM};
  margin: 0;

  @media all and (min-width: ${SCREEN_SM_MIN}) {
    font-size: ${FONT_SIZE_HERO_LG};
  }
`;

export const BillboardSubtitle = styled.p`
  margin: ${SPACING_BASE} auto ${SPACING_BASE};
  font-size: ${FONT_SIZE_BASE};
  font-weight: ${FONT_WEIGHT_DEMI};
  color: ${COLOR_HIGHLIGHT};
  line-height: 1.3;
  max-width: 30em;

  @media all and (min-width: ${SCREEN_SM_MIN}) {
    font-size: ${FONT_SIZE_LG};
  }
  @media all and (min-width: ${SCREEN_MD_MIN}) {
    font-size: ${FONT_SIZE_HERO};
  }
  @media all and (min-width: ${SCREEN_LG_MIN}) { }
`;

export const BillboardContent = styled.div`
  max-width: ${WIDTH_TEXT_COLUMN_MAX};
  margin-left: auto;
  margin-right: auto;
  ${edgePadding};
`;

export default function Billboard({ id, title, subtitle, children }) {
  return (
    <BillboardWrapper id={id}>
      {children || (
        <BillboardContent>
          <BillboardTitle>{title}</BillboardTitle>
          {subtitle && <BillboardSubtitle>{subtitle}</BillboardSubtitle>}
        </BillboardContent>
      )}
    </BillboardWrapper>
  );
}
