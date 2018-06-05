import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { Eyebrow } from './eyebrow';

import {
  FONT_SIZE_LG,
  COLOR_HIGHLIGHT,
  FONT_WEIGHT_DEMI,
  FONT_WEIGHT_MEDIUM,
  contentVerticalSpacing,
  SPACING_BASE,
} from '../styleVariables';

const headerHeight = 100;

const defaultBackgroundColor = '#131313';
const defaultBorderColor = '#191919';
const defaultForegroundColor = '#fff';
const defaultFontSize = FONT_SIZE_LG;


let backgroundColor = props => props.backgroundColor ? props.backgroundColor : defaultBackgroundColor;
let foregroundColor = props => props.foregroundColor ? props.foregroundColor : defaultForegroundColor;
let borderColor = props => props.borderColor ? props.borderColor : defaultBorderColor;
let fontSize = props => props.fontSize ? props.fontSize : defaultFontSize;



export const SectionBreak = styled.hr`
  border-top: 8px solid ${borderColor};
  margin: 0;
`;


export const SectionWrapper = styled.section`
  background-color: ${backgroundColor};
  color: ${foregroundColor};
  font-weight: ${FONT_WEIGHT_MEDIUM};
  padding: ${contentVerticalSpacing} 8%;
  text-align: center;
  line-height: 1.45;
  letter-spacing: 0.01em;
  display: flex;
  flex-direction: column;
  position: relative;
  border-top: ${parseInt(SPACING_BASE, 10) / 2}px solid ${borderColor};

  ${props => props.background && (`
    background-image: url('${props.background}');
    background-size: cover;
    background-position: center center;
  `)}

  ${props => props.fixedBackground && (`
    background-attachment: fixed;
  `)}

  &:first-child {
    border-top: 0;
  }

  & > h2 {
    font-size: ${FONT_SIZE_LG};
    font-weight: ${FONT_WEIGHT_DEMI};
    margin-bottom: 2em;

    &:before { 
      content: '';
      display: block;
      border-top: 3px solid ${COLOR_HIGHLIGHT};
      margin: 1em auto;
      width: 4em;
    }
  }

  p {
    font-size: ${fontSize};
    letter-spacing: 0.03em;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;

    strong {
      font-weight: inherit;
    }
  }

  ${props => props.noPadBottom && (`
    padding-bottom: 0;
  `)}
  ${props => props.noPadTop && (`
    padding-top: 0;
  `)}
  ${props => props.noBorder && (`
    border-top: 0;
  `)}

  ${props => props.type2 && (`
    display: block;

    h1, h2, h3, h4, h5 {
      text-transform: none;
      letter-spacing: normal;
      margin-top: 0.5em;
      line-height: 1.25;
      font-size: 200%;
      color: #ffffff;
      width: 100%;
      font-weight: ${FONT_WEIGHT_MEDIUM};

      &:after {
        content: '';
        height: 3px;
        width: 5em;
        background-color: rgba(0, 171, 42, 0.25);
        display: block;
        margin: 1em auto 0;
      }
    }

    @media all and (min-width: 1000px) {
      h1, h2, h3, h4, h5 {
        float: left;
        padding-right: 2em;
        text-align: left;
        width: 50%;

        &:after {
          margin: 1em 0 0 0;
        }
      }

      p {
        margin-left: 50%;
        text-align: left;
      }
    }
  `)}
`;

export const SectionBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.5;

  img {
    object-fit: cover;
  }
`;

const ImgLayoutWidth = '1000px';

const ColumnizedTextInsetWidth = '100px';

export const SectionImg = styled.figure`
  overflow: hidden;
  margin: 0;
  max-height: 400px;
  margin-bottom: 3em;

  img {
    object-fit: cover;
    object-position: bottom right;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    border-radius: 8px;
  }

  @media all and (min-width: ${ImgLayoutWidth}) {
    max-height: none;
    margin-bottom: 0;

    img {
      border-radius: 0;
    }

    ${props => props.right && (`
      position: absolute;
      width: 50%;
      top: 0;
      right: 0;
      bottom: 0;

      & ~ h4,
      & ~ p,
      & ~ div {
        padding-left: 0;
        margin-right: calc(50% + ${ColumnizedTextInsetWidth});
        text-align: left;
        margin-left: 0;
      }
    `)}

    ${props => props.left && (`
      position: absolute;
      width: 50%;
      top: 0;
      left: 0;
      bottom: 0;

      & ~ h4,
      & ~ p,
      & ~ div {
        padding-right: 0;
        padding-left: 0;
        margin-left: calc(50% + ${ColumnizedTextInsetWidth});
        text-align: left;
        margin-right: 0;
      }
    `)}
  }

`;

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.scrollEventInterval = 0;
    this.didScroll = false;
  }

  componentDidMount() {
    window.addEventListener('scroll', this._onScroll);
    this.scrollEventInterval = setInterval(this._scrollEventInterval, 150);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll);
    clearInterval(this.scrollEventInterval);
  }

  _onScroll = () => {
    this.didScroll = true;
  };

  _scrollEventInterval = () => {
    if (this.didScroll) {
      this.didScroll = false;
      const { top, height } = document
        .getElementById(this.props.id)
        .getBoundingClientRect();
      if (top - headerHeight <= 0 && top - headerHeight + height > 0) {
        this.props.onEnter(this.props.id);
      } else {
        this.props.onLeave(this.props.id);
      }
    }
  };

  render() {
    return (
      <SectionWrapper
        className={this.props.className}
        background={this.props.background}
        backgroundColor={this.props.backgroundColor}
        borderColor={this.props.borderColor}
        foregroundColor={this.props.foregroundColor}
        fontSize={this.props.fontSize}
        id={this.props.id}
        noPadBottom={this.props.noPadBottom}
        noPadTop={this.props.noPadTop}
        noBorder={this.props.noBorder}
        fixedBackground={this.props.fixedBackground}
        type2={this.props.type2}
      > 
        {this.props.children}
      </SectionWrapper>
    );
  }
}

Section.propTypes = {
  children: PropTypes.object,
  background: PropTypes.string,
  foregroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  noPadBottom: PropTypes.bool,
  noPadTop: PropTypes.bool,
  noBorder: PropTypes.bool,
  fixedBackground: PropTypes.bool,
  type2: PropTypes.bool,
  id: PropTypes.string,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func
};
