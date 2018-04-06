import React from 'react';
import styled from "styled-components";

const SectionWrapper = styled.div`
  padding: 0;
  margin: 32px auto 32px;
  max-width: 1400px;
`;

const Section = styled.section`
  font-weight: 600;
  display: flex;
  padding: 32px 64px;
  border-radius: 16px;
`;

const SectionHeading = styled.h2`
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

const SectionContent = styled.ul`
  flex: 0 0 50%;
  list-style: none;
  margin: 0;
  padding: 4px 0;
`;

const SectionLink = styled.li`
  color: #00ab2a;
  padding: 4px 0;

  a {
    text-decoration: underline;
    color: inherit;

    &:hover {
      color: #028221;
    }
  }
`;

function LinksCollection() {
  return (
    <SectionWrapper>
      <Section style={{ backgroundColor: 'rgba(0, 171, 42, 0.1', paddingTop: '32px' }}>
        <SectionHeading>Grey Matter</SectionHeading>
        <SectionContent>
          <SectionLink><a href="https://demo.deciphernow.com/dashboard/">Grey Matter Dashboard</a></SectionLink>
          <SectionLink><a href="https://demo.deciphernow.com/services/data/0.1.0/ui/build/index.html">Grey Matter Data Delivery Network Admin</a></SectionLink>
          <SectionLink><a href="http://demo.deciphernow.com/documentation/">Grey Matter Documentation</a></SectionLink>
          <SectionLink><a href="http://dcos.deciphernow.com">Mesosphere</a></SectionLink>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeading>Public Repositories</SectionHeading>
        <SectionContent>
          <SectionLink><a href="https://github.com/DecipherNow/gm-fabric-go">GO SDK</a></SectionLink>
          <SectionLink><a href="https://github.com/DecipherNow/gm-fabric-jvm">JVM SDK</a></SectionLink>
          <SectionLink><a href="https://github.com/DecipherNow/gm-fabric-documentation">Documentation</a></SectionLink>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeading>Subscriber Repositories<small>Grey Matter subscribers can request access to these private repositories</small></SectionHeading>
        <SectionContent>
          <SectionLink><a href="https://github.com/DecipherNow/gm-fabric-dashboard">Dashboard</a></SectionLink>
          <SectionLink><a href="https://github.com/DecipherNow/gm-data-ui-prototype">Grey Matter Data Admin Interface</a></SectionLink>
          <SectionLink><a href="https://github.com/DecipherNow/gm-documentation">Grey Matter Documentation</a></SectionLink>
          <SectionLink><a href="https://github.com/DecipherNow/discovery-service">Grey Matter Discovery</a></SectionLink>
          <SectionLink><a href="https://github.com/DecipherNow/gm-fabric-proxy">Grey Matter Pass-Though Proxy</a></SectionLink>
        </SectionContent>
      </Section>
    </SectionWrapper>
  );
}

export default LinksCollection;