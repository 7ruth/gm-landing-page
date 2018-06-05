import React from 'react';
import styled from 'styled-components';

import Section from './section.js';
import { FONT_WEIGHT_DEMI, COLOR_HIGHLIGHT, WIDTH_TEXT_COLUMN_MAX } from '../styleVariables';

import PDFThumbnailLink from './pdf-link';


const UseCasesHeading = styled.h4`
  font-weight: ${FONT_WEIGHT_DEMI};
  color: ${COLOR_HIGHLIGHT};
  color: currentColor;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: inline-block;
  border-radius: 4px;
  margin: .25em auto 1em;
  width: auto;
  line-height: 1;

  display: block;
  text-align: center;
`;


const UseCasesData = [
  {
    title: 'AI Foundation',
    preview: 'https://s3.amazonaws.com/decipher-public/grey-matter/cases/Thumbnails/Grey+Matter+-+AI+Foundation.png',
    download: 'https://s3.amazonaws.com/decipher-public/grey-matter/cases/Grey+Matter+-+AI+Foundation.pdf',
  },
  {
    title: 'Cloud to the Edge',
    preview: 'https://s3.amazonaws.com/decipher-public/grey-matter/cases/Thumbnails/Grey+Matter+-+Cloud+to+the+Edge.png',
    download: 'https://s3.amazonaws.com/decipher-public/grey-matter/cases/Grey+Matter+-+Cloud+to+the+Edge.pdf'
  },
  {
    title: 'Digital Twins',
    preview: 'https://s3.amazonaws.com/decipher-public/grey-matter/cases/Thumbnails/Grey+Matter+-+Digital+Twins.png',
    download: 'https://s3.amazonaws.com/decipher-public/grey-matter/cases/Grey+Matter+-+Digital+Twins.pdf'
  },
  {
    title: 'Intelligent Things',
    preview: 'https://s3.amazonaws.com/decipher-public/grey-matter/cases/Thumbnails/Grey+Matter+-+Intelligent+Things.png',
    download: 'https://s3.amazonaws.com/decipher-public/grey-matter/cases/Grey+Matter+-+Intelligent+Things.pdf'
  },
  {
    title: 'Intelligent Apps and Analytics',
    preview: 'https://s3.amazonaws.com/decipher-public/grey-matter/cases/Thumbnails/Grey+Matter+-+Intelligent+Apps+and+Analytics.png',
    download: 'https://s3.amazonaws.com/decipher-public/grey-matter/cases/Grey+Matter+-+Intelligent+Apps+and+Analytics.pdf'
  },
];


const UseCasesList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  max-width: ${WIDTH_TEXT_COLUMN_MAX};
  margin-left: auto;
  margin-right: auto;
`;


export default class UseCases extends React.Component {
  render() {
    return (
      <Section backgroundColor="#fff" foregroundColor="#000" borderColor="#fafafa">
        <UseCasesHeading>Use Cases</UseCasesHeading>
        <p>Explore use cases that demonstrate the power&nbsp;of&nbsp;Grey Matter</p>
        <UseCasesList>
          {UseCasesData.map(w => (
            <PDFThumbnailLink
              key={w.title}
              title={w.title}
              filename={w.filename}
              preview={w.preview}
              download={w.download}
            />
          ))}
        </UseCasesList>
      </Section>
    );
  }
}