import React from 'react';
import styled from "styled-components";

const WidgetA = require('../assets/widget-a.svg')
const WidgetB = require('../assets/widget-b.svg')
const WidgetC = require('../assets/widget-c.svg')

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
  padding: 0 64px;
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

          <svg width="72px" height="42px" viewBox="0 0 72 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <circle id="path-1" cx="2.5" cy="2.5" r="2.5"></circle>
              <circle id="path-2" cx="2.5" cy="2.5" r="2.5"></circle>
              <circle id="path-3" cx="2.5" cy="2.5" r="2.5"></circle>
              <circle id="path-4" cx="31" cy="17" r="12"></circle>
            </defs>
            <g id="widget-a" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group" transform="translate(4.000000, 3.000000)">
                <g id="dingus" transform="translate(16.500000, 10.500000) rotate(21.000000) translate(-16.500000, -10.500000) translate(0.000000, 8.000000)">
                  <polygon id="Line" fill="#2FBE4C" fill-rule="nonzero" points="3 3 3 2 33 2 33 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-1"></use>
                    <use fill="#2FBE4C" fill-rule="evenodd" xlinkHref="#path-1"></use>
                    <circle stroke="#2FBE4C" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="dingus" transform="translate(38.500000, 9.500000) rotate(137.000000) translate(-38.500000, -9.500000) translate(28.000000, 7.000000)">
                  <polygon id="Line" fill="#2FBE4C" fill-rule="nonzero" points="3 3 3 2 21 2 21 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-2"></use>
                    <use fill="#2FBE4C" fill-rule="evenodd" xlinkHref="#path-2"></use>
                    <circle stroke="#2FBE4C" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="dingus" transform="translate(44.000000, 22.500000) rotate(204.000000) translate(-44.000000, -22.500000) translate(30.000000, 20.000000)">
                  <polygon id="Line" fill="#2FBE4C" fill-rule="nonzero" points="3 3 3 2 28 2 28 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    <use fill="#2FBE4C" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    <circle stroke="#2FBE4C" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="Oval">
                  <use fill="#000000" fill-rule="evenodd" xlinkHref="#path-4"></use>
                  <circle stroke="#2FBE4C" stroke-width="2" cx="31" cy="17" r="11"></circle>
                </g>
              </g>
            </g>
          </svg>

        </FeatureRound>
        <FeatureTitle>Service-Mesh<br />Fabric Control</FeatureTitle>
        <FeatureBody>Increased uptime and availability through service assurance.</FeatureBody>
      </Feature>
      <Feature>
        <FeatureRound>


          <svg width="72px" height="42px" viewBox="0 0 72 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <circle id="path-1" cx="2.5" cy="2.5" r="2.5"></circle>
              <circle id="path-2" cx="2.5" cy="2.5" r="2.5"></circle>
              <circle id="path-3" cx="2.5" cy="2.5" r="2.5"></circle>
              <circle id="path-4" cx="31" cy="17" r="12"></circle>
            </defs>
            <g id="widget-a" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group" transform="translate(4.000000, 3.000000)">
                <g id="dingus" transform="translate(16.500000, 10.500000) rotate(21.000000) translate(-16.500000, -10.500000) translate(0.000000, 8.000000)">
                  <polygon id="Line" fill="#2FBE4C" fill-rule="nonzero" points="3 3 3 2 33 2 33 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-1"></use>
                    <use fill="#2FBE4C" fill-rule="evenodd" xlinkHref="#path-1"></use>
                    <circle stroke="#2FBE4C" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="dingus" transform="translate(38.500000, 9.500000) rotate(137.000000) translate(-38.500000, -9.500000) translate(28.000000, 7.000000)">
                  <polygon id="Line" fill="#2FBE4C" fill-rule="nonzero" points="3 3 3 2 21 2 21 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-2"></use>
                    <use fill="#2FBE4C" fill-rule="evenodd" xlinkHref="#path-2"></use>
                    <circle stroke="#2FBE4C" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="dingus" transform="translate(44.000000, 22.500000) rotate(204.000000) translate(-44.000000, -22.500000) translate(30.000000, 20.000000)">
                  <polygon id="Line" fill="#2FBE4C" fill-rule="nonzero" points="3 3 3 2 28 2 28 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    <use fill="#2FBE4C" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    <circle stroke="#2FBE4C" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="Oval">
                  <use fill="#000000" fill-rule="evenodd" xlinkHref="#path-4"></use>
                  <circle stroke="#2FBE4C" stroke-width="2" cx="31" cy="17" r="11"></circle>
                </g>
              </g>
            </g>
          </svg>
        </FeatureRound>
        <FeatureTitle>Distributed Data<br />Delivery Network</FeatureTitle>
        <FeatureBody>Advanced, controlled, secured, and distributed IoT Data Delivery Network</FeatureBody>
      </Feature>
      <Feature>
        <FeatureRound>


          <svg width="72px" height="42px" viewBox="0 0 72 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <circle id="path-1" cx="2.5" cy="2.5" r="2.5"></circle>
              <circle id="path-2" cx="2.5" cy="2.5" r="2.5"></circle>
              <circle id="path-3" cx="2.5" cy="2.5" r="2.5"></circle>
              <circle id="path-4" cx="31" cy="17" r="12"></circle>
            </defs>
            <g id="widget-a" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group" transform="translate(4.000000, 3.000000)">
                <g id="dingus" transform="translate(16.500000, 10.500000) rotate(21.000000) translate(-16.500000, -10.500000) translate(0.000000, 8.000000)">
                  <polygon id="Line" fill="#2FBE4C" fill-rule="nonzero" points="3 3 3 2 33 2 33 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-1"></use>
                    <use fill="#2FBE4C" fill-rule="evenodd" xlinkHref="#path-1"></use>
                    <circle stroke="#2FBE4C" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="dingus" transform="translate(38.500000, 9.500000) rotate(137.000000) translate(-38.500000, -9.500000) translate(28.000000, 7.000000)">
                  <polygon id="Line" fill="#2FBE4C" fill-rule="nonzero" points="3 3 3 2 21 2 21 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-2"></use>
                    <use fill="#2FBE4C" fill-rule="evenodd" xlinkHref="#path-2"></use>
                    <circle stroke="#2FBE4C" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="dingus" transform="translate(44.000000, 22.500000) rotate(204.000000) translate(-44.000000, -22.500000) translate(30.000000, 20.000000)">
                  <polygon id="Line" fill="#2FBE4C" fill-rule="nonzero" points="3 3 3 2 28 2 28 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    <use fill="#2FBE4C" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    <circle stroke="#2FBE4C" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="Oval">
                  <use fill="#000000" fill-rule="evenodd" xlinkHref="#path-4"></use>
                  <circle stroke="#2FBE4C" stroke-width="2" cx="31" cy="17" r="11"></circle>
                </g>
              </g>
            </g>
          </svg>
        </FeatureRound>
        <FeatureTitle>Sense</FeatureTitle>
        <FeatureBody>The Final Frontier:<br />The AI-powered Sense network control plane ensures services deliver as intended</FeatureBody>
      </Feature>
    </TrioWrapper>
  );
}

export default FeaturesTrio;