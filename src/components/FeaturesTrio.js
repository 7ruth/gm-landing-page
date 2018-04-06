import React from 'react';
import styled from "styled-components";

import WidgetA from "./WidgetA";
import WidgetB from "./WidgetB";
import WidgetC from "./WidgetC";

const TrioWrapper = styled.div`
  margin: 0 auto;
  padding: 112px 0 0;
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

const Feature = styled.div`
  color: #fff;
  margin-right: 16px;
  flex: 0 0 calc(33%);

  &:last-child {
    margin-right: 0;
  }

  &:last-child > ${FeatureRound}:after {
    content: none;
  }
`;

const FeatureTitle = styled.h2`
  color: #2FBE4C;
  margin: 32px 0 4px;
  padding: 0 8px;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.1;
`;

const FeatureBody = styled.p`
  margin: 0 auto;
  font-weight: 600;
  max-width: 400px;
  padding: 0 8px;
`;

const FeatureRound = styled.div`
  font-size: 32px;
  color: #2FBE4C;
  font-weight: 400;
  line-height: 0;
  position: relative;
  width: 50%;
  text-align: center;
  height: 21px;
  width: 36px;
  margin-bottom: 32px;
  overflow: visible;
  margin: 0 auto;

  svg {
    margin-left: -18px;
    position: relative;
    z-index: 10;
  }

  &:after {
    content: '';
    position: absolute;
    width: calc(((100vw / 3) - 32px));
    max-width: 478px;
    min-width: 300px;
    left: 50%;
    height: 1.5px;
    top: calc(100% - 2px);
    background-color: #2FBE4C;
    z-index: 0;
  }
`;

function FeaturesTrio() {
  return (
    <TrioWrapper>
      <Feature>
        <FeatureRound>
          <WidgetA />
        </FeatureRound>
        <FeatureTitle>Service-Mesh<br />Fabric Control</FeatureTitle>
        <FeatureBody>Increased uptime and availability through service assurance.</FeatureBody>
      </Feature>
      <Feature>
        <FeatureRound>
          <WidgetB />
        </FeatureRound>
        <FeatureTitle>Distributed Data<br />Delivery Network</FeatureTitle>
        <FeatureBody>Advanced, controlled, secured, and distributed IoT Data Delivery Network</FeatureBody>
      </Feature>
      <Feature>
        <FeatureRound>
          <WidgetC />
        </FeatureRound>
        <FeatureTitle>Sense</FeatureTitle>
        <FeatureBody>The Final Frontier:<br />The AI-powered Sense network control plane ensures services deliver as intended</FeatureBody>
      </Feature>
    </TrioWrapper>
  );
}

export default FeaturesTrio;