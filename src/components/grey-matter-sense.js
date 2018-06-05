import React from 'react';

import Section from './section';

import { Gallery, GalleryRow } from "./gallery";
import ContentHeader from "./content-header";
import TextRegion from "./text-region";
import { FONT_SIZE_BASE } from '../styleVariables';

const SectionBlurb = 'Sense is a contextual awareness, visualization, and monitoring component designed to flexibly integrate current, experimental, and even unforeseeable future developments in data analytics, machine learning, and artificial intelligence. In its full manifestation, Sense serves as the central nervous system for Network AI within a complex micro/nano service enabled enterprise.';
const SectionBullets = [
  "Enables microservice telemetry to build out complex AI to manage the network itself",
  "Manifests event-driven pipelines and data flows in support of data insights, contextual cues, and analytics",
  "Automates service-level agreements",
];


export default class GreyMatterData extends React.Component {
  render() {
    return (
      <Section
        id={"sense"}
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
              title="Sense"
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
              src='https://s3.amazonaws.com/decipher-public/grey-matter/screenshots/instance-routes.png'
              alt='Instance Routes'
            />
            <GalleryRow>
              <figure>
                <img
                  src='https://s3.amazonaws.com/decipher-public/grey-matter/screenshots/instance-summary.png'
                  alt='Instance Metrics Summary'
                />
              </figure>
              <figure>
                <img
                  src='https://s3.amazonaws.com/decipher-public/grey-matter/screenshots/service-explorer.png'
                  alt='Instance Metrics Explorer'
                />
              </figure>
              <figure>
                <img
                  src='https://s3.amazonaws.com/decipher-public/grey-matter/screenshots/instance-routes.png'
                  alt='Service Level Objectives at Routes'
                />
              </figure>
              <figure>
                <img
                  src='https://s3.amazonaws.com/decipher-public/grey-matter/screenshots/service-summary-with-slos.png'
                  alt='Service Level Objectives'
                />
              </figure>
            </GalleryRow>
          </Gallery>
        </TextRegion>
      </Section>
    );
  }
}