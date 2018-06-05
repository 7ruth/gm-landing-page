import React from 'react';

import Section from './section';

import { Gallery } from "./gallery";
import ContentHeader from "./content-header";
import TextRegion from "./text-region";
import { FONT_SIZE_BASE } from '../styleVariables';

const SectionBlurb = 'Grey Matter Data is the highly secure Edge data distribution and content delivery network enabling Enterprise micro/nano-services to move secure, targeted data from service to service, across markets, and around the globe.';
const SectionBullets = [
  "Secure by design",
  "Distributes to the network edge",
  "Provides granular access permissions",
];


export default class GreyMatterData extends React.Component {
  render() {
    return (
      <Section
        id={"data"}
        onEnter={this.props.onEnter}
        onLeave={this.props.onLeave}
        backgroundColor="#fff"
        foregroundColor="#000"
        borderColor="#fafafa"
        fontSize={FONT_SIZE_BASE}
      >
        <TextRegion cols>
          <div>
            <ContentHeader
              title="Data"
            />
            <p>{SectionBlurb}</p>
            <ul>
              {SectionBullets.map(b => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <Gallery shadow rounded>
            <img
              src='https://s3.amazonaws.com/decipher-public/grey-matter/screenshots/data-json.png'
              alt='Data Explorer'
            />
          </Gallery>
        </TextRegion>
      </Section>
    );
  }
}