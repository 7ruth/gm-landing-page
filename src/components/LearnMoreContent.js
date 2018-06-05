import React from 'react';
import styled from 'styled-components';

import Section from './section.js';

import FabricDiagram from '../assets/diagram-gm-fabric.png';
import SenseDiagram from '../assets/diagram-gm-sense.png';
import DataDiagram from '../assets/diagram-gm-data.png';

const Article = styled.article`
  padding: 64px 64px;
  margin: 0 auto;
  max-width: 1400px;
`;

const ArticleHeader = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 32px;
`;

const ArticleSection = styled.section`
  display: flex;
  flex-direction: row;
  padding: 32px 0;
  margin-bottom: 64px;
  text-align: left;
`;

const SectionTitle = styled.h3`
  /* color: #00ab2a; */
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 8px;
  margin: 0 0 8px;
`;

const SectionContent = styled.div`
  width: 100%;
  padding-left: 16px;

  p, ul, ol {
    margin: 8px 0 0 0;
  }

  ul {
    padding: 0;
    list-style: none;

    li {
      margin-top: 12px;
      
      &:before {
        content: '•';
        color: #00ab2a;
        margin-left: -0.35em;
        position: relative;
        right: 0.5em;
        display: inline-block;
        transform: scale(0.9);
      }
    }
  }

  * {
    max-width: 500px;
  }
`;

const Content = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: flex-start;
  order: 1;
  justify-content: center;
`;

const Diagram = styled.div`
  flex: 0 0 50%;
  display: flex;
  order: 0;
  align-items: center;
  justify-content: center;

  img {
    height: auto;
    width: 100%;
  }
`;


function LearnMoreContent() {
  return (
    <Section backgroundColor="#fff" foregroundColor="#000" borderColor="#fafafa" noPadTop>
      <Article>
        <ArticleHeader>Learn more about Grey Matter</ArticleHeader>
        <ArticleSection>
          <Content>
            <SectionContent>
              <SectionTitle>Fabric</SectionTitle>
              <p>The master control and data plane, managing the entire mesh platform within an Enterprise. Our control plane sets fleet-wide policies and controls which are enacted by the data plane offering unbounded knowledge and uncommon control.</p>
              <ul>
                <li>Wraps legacy services</li>
                <li>Independent per-service scaling</li>
                <li>Accelerates delivery of new capabilities</li>
              </ul>
            </SectionContent>
          </Content>
          <Diagram><img alt="" src={FabricDiagram} style={{ maxWidth: '448px' }} /></Diagram>
        </ArticleSection>
        <ArticleSection>
          <Content>
            <SectionContent>
              <SectionTitle>Data</SectionTitle>
              <p>Grey Matter Data is the highly secure Edge data distribution and content delivery network enabling Enterprise micro/nano-services to move secure, targeted data from service to service, across markets, and around the globe.</p>
              <ul>
                <li>Secure by design</li>
                <li>Distributes to the network edge</li>
                <li>Provides granular access permissions</li>
              </ul>
            </SectionContent>
          </Content>
          <Diagram><img alt="" src={DataDiagram} style={{ maxWidth: '534px' }} /></Diagram>
        </ArticleSection>
        <ArticleSection>
          <Content>
            <SectionContent>
              <SectionTitle>Sense</SectionTitle>
              <p>The Final Frontier of true network operations AI. Grey Matter Sense extends network situational awareness through the surface, conversion, process, and summarization of relevant information derived from dynamic neural network and machine learning algorithms, providing data-driven context to the Enterprise.</p>
              <ul>
                <li>Enables microservice telemetry to build out complex AI to manage the network itself</li>
                <li>Manifests event-driven pipelines and data flows in support of data insights, contextual cues, and analytics.</li>
                <li>Automates service-level agreements</li>
              </ul>
            </SectionContent>
          </Content>
          <Diagram><img alt="" src={SenseDiagram} style={{ maxWidth: '323px' }} /></Diagram>
        </ArticleSection>
      </Article>
    </Section>
  );
}

export default LearnMoreContent;