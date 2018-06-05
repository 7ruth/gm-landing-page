import React from 'react';

import {
  BillboardWrapper,
  BillboardTitle,
  BillboardSubtitle,
  BillboardContent
} from "./billboard";

import FeaturesTrio from './FeaturesTrio';

import GreyMatterMeshBackground from '../assets/mesh-web-black.jpg';

export const GreyMatterBillboardTitle = BillboardTitle.extend``;

export const GreyMatterBillboardWrapper = BillboardWrapper.extend`
  align-items: center;
  justify-content: center;
  transition: 0;

  img {
    width: 150%;
    height: auto;
    transform: translateY(calc(25% + 10vh));
    max-height: 450px;
    opacity: 0.8;
  }

  &:before {
    content: none;
  }
`;

export const GreyMatterBillboardSubtitle = BillboardSubtitle.extend`
  max-width: 20em;
`;

export const GreyMatterBillboardContent = BillboardContent.extend`
  position: relative;

  > * {
    position: relative;
    z-index: 10;
  }
`;


export default class GreyMatterBillboard extends React.Component {
  render() {
    return (
      <GreyMatterBillboardWrapper
        subtitle="Microservice development doesn't have to start from zero."
        title="Grey Matter"
      >
        <GreyMatterBillboardContent>
          <GreyMatterBillboardTitle>Grey Matter</GreyMatterBillboardTitle>
          <GreyMatterBillboardSubtitle>
            The central&nbsp;nervous&nbsp;system for your&nbsp;network&apos;s&nbsp;AI.
          </GreyMatterBillboardSubtitle>
          <FeaturesTrio />
        </GreyMatterBillboardContent>
        <div className="background">
          <img src={GreyMatterMeshBackground} alt="" />
        </div>
      </GreyMatterBillboardWrapper>
    );
  }
}