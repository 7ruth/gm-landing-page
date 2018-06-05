import React from 'react';
import styled from "styled-components";

import Section from './section';
import { WIDTH_TEXT_COLUMN_MAX } from '../styleVariables';

const LSectionWrapper = styled.div`
  padding: 0;
  margin: 32px auto 32px;
  width: 100%;
  max-width: ${WIDTH_TEXT_COLUMN_MAX};
`;

const LSection = styled.section`
  font-weight: 600;
  text-align: left;
  display: flex;
  padding: 32px 64px;
`;

const LSectionHeading = styled.h2`
  flex: 0 0 50%;
  font-weight: 600;
  margin: 0;
  padding: 0;
  font-size: 32px;

  small {
    font-size: 14px;
    opacity: 0.7;
    display: block;
    max-width: 20em;
  }
`;

const LSectionContent = styled.ul`
  flex: 0 0 50%;
  list-style: none;
  margin: 0;
  padding: 4px 0;
`;

const SectionLink = styled.li`
  color: #00ab2a;
  padding: 4px 0;

  a {
    color: inherit;

    &:hover {
      color: #028221;
    }
  }
`;

function LinksCollection() {
  return (
    <Section backgroundColor="#fff" foregroundColor="#000" noBorder noPadTop noPadBottom>
      <LSectionWrapper>
        <LSection>
          <LSectionHeading>Grey Matter</LSectionHeading>
          <LSectionContent>
            <SectionLink><a href="https://demo.deciphernow.com/dashboard/">Grey Matter Dashboard</a></SectionLink>
            <SectionLink><a href="https://demo.deciphernow.com/services/data/0.1.0/ui/build/index.html">Grey Matter Data Delivery Network Admin</a></SectionLink>
            <SectionLink><a href="http://demo.deciphernow.com/documentation/">Grey Matter Documentation</a></SectionLink>
            <SectionLink><a href="http://dcos.deciphernow.com">Mesosphere</a></SectionLink>
          </LSectionContent>
        </LSection>
        <LSection>
          <LSectionHeading>Public Repositories</LSectionHeading>
          <LSectionContent>
            <SectionLink><a href="https://github.com/DecipherNow/gm-fabric-go">GO SDK</a></SectionLink>
            <SectionLink><a href="https://github.com/DecipherNow/gm-fabric-jvm">JVM SDK</a></SectionLink>
            <SectionLink><a href="https://github.com/DecipherNow/gm-fabric-documentation">Documentation</a></SectionLink>
          </LSectionContent>
        </LSection>
        <LSection>
          <LSectionHeading>Subscriber Repositories<small>Grey Matter subscribers can request access to these private repositories</small></LSectionHeading>
          <LSectionContent>
            <SectionLink><a href="https://github.com/DecipherNow/gm-fabric-dashboard">Dashboard</a></SectionLink>
            <SectionLink><a href="https://github.com/DecipherNow/gm-data-ui-prototype">Grey Matter Data Admin Interface</a></SectionLink>
            <SectionLink><a href="https://github.com/DecipherNow/gm-documentation">Grey Matter Documentation</a></SectionLink>
            <SectionLink><a href="https://github.com/DecipherNow/discovery-service">Grey Matter Discovery</a></SectionLink>
            <SectionLink><a href="https://github.com/DecipherNow/gm-fabric-proxy">Grey Matter Pass-Though Proxy</a></SectionLink>
          </LSectionContent>
        </LSection>
      </LSectionWrapper>
    </Section>
  );
}

export default LinksCollection;