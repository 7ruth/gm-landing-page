import React from 'react';

import Button from './button';

import Section from './section';

import { Gallery } from './gallery';
import ContentHeader from './content-header';
import TextRegion from './text-region';
import { FONT_SIZE_BASE } from '../styleVariables';


const SectionBlurb = 'A distributed system increases deployment complexity, operations, and density challenges upon your infrastructure and network. Grey Matter Fabric ensures maximum utilization of resources through function level telemetry, SLA management, and AI. Fabric also serves as a fleet-wide distributed control and data plane, capable of abstracting away complexity, further easing infrastructure and network burden.';
const SectionBullets = [
  'Wraps legacy services',
  'Independent per-service scaling',
  'Accelerates delivery of new capabilities',
];

export default class GreyMatterFabric extends React.Component {
  render() {
    return (
      <Section
        id={'fabric'}
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
              title="Fabric"
            />
            <p>{SectionBlurb}</p>
            <ul>
              {SectionBullets.map(b => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <Gallery shadow rounded>
            <img src='https://s3.amazonaws.com/decipher-public/grey-matter/screenshots/fabric-sorted-status.png' alt="Fabric Dashboard" />
          </Gallery>
        </TextRegion>
      </Section>
    );
  }
}
