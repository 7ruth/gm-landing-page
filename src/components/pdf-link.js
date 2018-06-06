import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

import { FONT_SIZE_SM, COLOR_HIGHLIGHT, FONT_WEIGHT_DEMI } from '../styleVariables';

import DownloadIcon from '../assets/icons/download';

const UnderlayColor = '#eee';
const LinkTextColor = COLOR_HIGHLIGHT;

const PDFLinkWrap = styled.a`
  color: ${LinkTextColor};
  font-weight: ${FONT_WEIGHT_DEMI};
  margin: 0.5em;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  transition: all .15s ease;
  flex: 1 1;

  > *{ 
    position: relative;
    z-index: 1;
  }

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    right: -4px;
    left: -4px;
    bottom: -4px;
    border-radius: 12px;
    transform: scale(1.015);
    background-color: ${UnderlayColor};
    transition: all .1s ease;
    opacity: 1;
    background-color: transparent;
    z-index: 0;
    pointer-events: none;
  }

  &:hover {
    color: ${LinkTextColor};
    box-shadow: none;
    text-decoration: none;
    transform: scale(1.015);

    &:before {
      background-color: ${UnderlayColor};
      transform: scale(1);
      opacity: 1;
    }

    .title {
      opacity: 0;
    }

    .action {
      opacity: 1;
    }
  }
`;

const PDFLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em 0.5em;
  margin: 0;
  border-radius: 8px;
  font-size: ${FONT_SIZE_SM};
  letter-spacing: 0.03em;
  flex: 0 0 auto;
`;

const PDFTitle = styled.span``;

const PDFDownloadText = styled.span`
  transition: all .15s ease;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  color: ${COLOR_HIGHLIGHT};

  svg {
    margin-right: 0.5em;
  }
`;

const PDFPreviewImg = styled.img`
  border-radius: 8px;
  width: 100%;
  height: auto;
  flex: 0 0 auto;
  margin-bottom: .25em;
  transition: all .15s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,.05), 0 0 1px rgba(0,0,0,.1);
`;


export default class PDFThumbnailLink extends React.Component {
  render() {
    return (
      <PDFLinkWrap href={this.props.download} download={this.props.filename}>
        <PDFPreviewImg src={this.props.preview} />
        <PDFLabel>
          <PDFTitle className="title">{this.props.title}</PDFTitle>
          <PDFDownloadText className="action"><DownloadIcon /> Download</PDFDownloadText>
        </PDFLabel>
      </PDFLinkWrap>
    );
  }
}


PDFThumbnailLink.propTypes = {
  title: PropTypes.string,
  preview: PropTypes.string,
  filename: PropTypes.string,
  download: PropTypes.string
};
