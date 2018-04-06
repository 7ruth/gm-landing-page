import React from 'react';
import styled from "styled-components";
import FeaturesTrio from './FeaturesTrio';

import Mesh from '../assets/mesh.jpg';

const Header = styled.header`
  background-color: black;
  color: #fff;
  padding: 64px 64px 80px;
  background-image: url('${Mesh}');
  background-size: 100% auto;
  background-position: right -50% center;
  background-repeat: no-repeat;
`;

const SiteTitle = styled.h1`
  font-size: 72px;
  margin: 0 auto;
  font-weight: 600;
  max-width: 1400px;
`;

const HeaderSubLine = styled.p`
  font-weight: 600;
  margin: 0 auto;
  max-width: 1400px;
`;

function PageHeader() {
  return (
    <Header>
      <SiteTitle>Grey Matter</SiteTitle>
      <HeaderSubLine>A cloud-native, cloud-agnostic, virtualized, microservice fabric.</HeaderSubLine>
      <FeaturesTrio />
    </Header>
  );
}

export default PageHeader;