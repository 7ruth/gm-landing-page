import React from 'react';
import styled from "styled-components";

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

const Section = styled.section`
  display: flex;
  flex-direction: row;
  padding: 32px 0;
  margin-bottom: 64px;
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
    <Article>
      <ArticleHeader>Learn more about Grey Matter</ArticleHeader>
      <Section>
        <Content>
          <SectionContent>
            <SectionTitle>Fabric</SectionTitle>
            <p>[FABRIC CONTENT NEEDED]</p>
            <ul>
              <li>Wraps legacy services</li>
              <li>Independent per-service scaling</li>
              <li>Accelerates delivery of new capabilities</li>
            </ul>
          </SectionContent>
        </Content>
        <Diagram><img src={FabricDiagram} style={{ maxWidth: '448px' }} /></Diagram>
      </Section>
      <Section>
        <Content>
          <SectionContent>
            <SectionTitle>Data</SectionTitle>
            <p>Data provides API, filesystem, and encryption layers atop pluggable storage backends, such as Amazon AWS S3. Encryption keys are stored such that the compromise of a single machine is insufficient to decrypt any data, compromises cannot spread between objects, users never have direct possession of object keys, and yet authorized emergency decryption remains possible. Sharing is cryptographically enforced. Data serves as the data hub of Grey Matter.</p>
            <ul>
              <li>[DATA CONTENT NEEDED]</li>
            </ul>
          </SectionContent>
        </Content>
        <Diagram><img src={DataDiagram} style={{ maxWidth: '534px' }} /></Diagram>
      </Section>
      <Section>
        <Content>
          <SectionContent>
            <SectionTitle>Sense</SectionTitle>
            <p>[SENSE CONTENT NEEDED]</p>
            <ul>
              <li>[SENSE CONTENT NEEDED]</li>
            </ul>
          </SectionContent>
        </Content>
        <Diagram><img src={SenseDiagram} style={{ maxWidth: '323px' }} /></Diagram>
      </Section>
    </Article>
  );
}

export default LearnMoreContent;