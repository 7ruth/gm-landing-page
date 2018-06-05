import React from 'react';
import styled from "styled-components";


const TrioWrapper = styled.div`
  margin: 0 auto;
  padding: 112px 0 0;
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

const FeatureRound = styled.div`
  font-size: 32px;
  color: #00ab2a;
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
    width: calc(((100vw / 3) - 7px));
    max-width: 388px;
    min-width: 313px;
    left: 50%;
    height: 1.5px;
    top: calc(100% - 2px);
    background-color: #00ab2a;
    opacity: 0.3;
    z-index: 0;
  }
`;

const Feature = styled.div`
  color: #fff;
  margin-right: 16px;
  flex: 0 0 calc(33%);
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  &:last-child > ${FeatureRound}:after {
    content: none;
  }

  &:after { 
    content: '';
    position: absolute;
    top: 2em;
    right: 1em;
    bottom: -0.5em;
    left: 1em;
    background-color: #000;
    filter: blur(12px);
    opacity: 0.6;
    border-radius: 100%;
    z-index: -1;
  }
`;

const FeatureTitle = styled.h2`
  color: #00ab2a;
  margin: 32px 0 4px;
  padding: 0 8px;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.1;
`;

const FeatureBody = styled.p`
  margin: 0 auto;
  font-weight: 600;
  max-width: 350px;
  line-height: 1.4;
  padding: 0 8px;
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
              <g id="Group" transform="translate(4, 3)">
                <g id="dingus" transform="translate(16.5, 10.5) rotate(21) translate(-16.5, -10.5) translate(0, 8)">
                  <polygon id="Line" fill="#00ab2a" fill-rule="nonzero" points="3 3 3 2 33 2 33 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-1"></use>
                    <use fill="#00ab2a" fill-rule="evenodd" xlinkHref="#path-1"></use>
                    <circle stroke="#00ab2a" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="dingus" transform="translate(38.5, 9.5) rotate(137) translate(-38.5, -9.5) translate(28, 7)">
                  <polygon id="Line" fill="#00ab2a" fill-rule="nonzero" points="3 3 3 2 21 2 21 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-2"></use>
                    <use fill="#00ab2a" fill-rule="evenodd" xlinkHref="#path-2"></use>
                    <circle stroke="#00ab2a" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="dingus" transform="translate(44, 22.5) rotate(204) translate(-44, -22.5) translate(30, 20)">
                  <polygon id="Line" fill="#00ab2a" fill-rule="nonzero" points="3 3 3 2 28 2 28 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    <use fill="#00ab2a" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    <circle stroke="#00ab2a" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="Oval">
                  <use fill="#000000" fill-rule="evenodd" xlinkHref="#path-4"></use>
                  <circle stroke="#00ab2a" stroke-width="2" cx="31" cy="17" r="11"></circle>
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
              <g id="Group" transform="translate(4, 3)">
                <g id="dingus" transform="translate(16.5, 10.5) rotate(21) translate(-16.5, -10.5) translate(0, 8)">
                  <polygon id="Line" fill="#00ab2a" fill-rule="nonzero" points="3 3 3 2 33 2 33 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-1"></use>
                    <use fill="#00ab2a" fill-rule="evenodd" xlinkHref="#path-1"></use>
                    <circle stroke="#00ab2a" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="dingus" transform="translate(38.5, 9.5) rotate(137) translate(-38.5, -9.5) translate(28, 7)">
                  <polygon id="Line" fill="#00ab2a" fill-rule="nonzero" points="3 3 3 2 21 2 21 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-2"></use>
                    <use fill="#00ab2a" fill-rule="evenodd" xlinkHref="#path-2"></use>
                    <circle stroke="#00ab2a" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="dingus" transform="translate(44, 22.5) rotate(204) translate(-44, -22.5) translate(30, 20)">
                  <polygon id="Line" fill="#00ab2a" fill-rule="nonzero" points="3 3 3 2 28 2 28 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    <use fill="#00ab2a" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    <circle stroke="#00ab2a" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="Oval">
                  <use fill="#000000" fill-rule="evenodd" xlinkHref="#path-4"></use>
                  <circle stroke="#00ab2a" stroke-width="2" cx="31" cy="17" r="11"></circle>
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
              <g id="Group" transform="translate(4, 3)">
                <g id="dingus" transform="translate(16.5, 10.5) rotate(21) translate(-16.5, -10.5) translate(0, 8)">
                  <polygon id="Line" fill="#00ab2a" fill-rule="nonzero" points="3 3 3 2 33 2 33 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-1"></use>
                    <use fill="#00ab2a" fill-rule="evenodd" xlinkHref="#path-1"></use>
                    <circle stroke="#00ab2a" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="dingus" transform="translate(38.5, 9.5) rotate(137) translate(-38.5, -9.5) translate(28, 7)">
                  <polygon id="Line" fill="#00ab2a" fill-rule="nonzero" points="3 3 3 2 21 2 21 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-2"></use>
                    <use fill="#00ab2a" fill-rule="evenodd" xlinkHref="#path-2"></use>
                    <circle stroke="#00ab2a" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="dingus" transform="translate(44, 22.5) rotate(204) translate(-44, -22.5) translate(30, 20)">
                  <polygon id="Line" fill="#00ab2a" fill-rule="nonzero" points="3 3 3 2 28 2 28 3"></polygon>
                  <g id="Oval-3">
                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    <use fill="#00ab2a" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    <circle stroke="#00ab2a" stroke-width="1" cx="2.5" cy="2.5" r="2"></circle>
                  </g>
                </g>
                <g id="Oval">
                  <use fill="#000000" fill-rule="evenodd" xlinkHref="#path-4"></use>
                  <circle stroke="#00ab2a" stroke-width="2" cx="31" cy="17" r="11"></circle>
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