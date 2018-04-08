import React from 'react';
import styled from "styled-components";

const AppHeaderWrap = styled.div`
  background-color: #000;
  color: #fff;
  padding: 4px;
`;

const Brand = styled.div`
  color: #fff;
  font-size: 12px;
  letter-spacing: .03em;
  font-weight: 600;
  padding: 4px;
  max-width: calc(1400px - (64px * 2));
  margin: 0 auto;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  line-height: 1.1;

  svg {
    margin-right: 0.8em;
    position: relative;
    bottom: 1px;
  }
`;

function AppHeader() {
  return (
    <AppHeaderWrap>
      <Brand>
        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="App-Header" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-1, 0)">
              <g transform="translate(1, 0)">
                <path d="M20,4 C20,6.20917049 18.2093098,8 16.000125,8 C13.7910236,8 12,6.20917049 12,4 C12,1.79082951 13.7910236,0 16.000125,0 C18.2093098,0 20,1.79082951 20,4" id="Fill-1" fill="#34A948"></path>
                <path d="M8,4 C8,6.20917049 6.20924513,8 4.00016673,8 C1.79108832,8 0,6.20917049 0,4 C0.00033345838,1.79082951 1.79108832,0 4.00016673,0 C6.20924513,0 8,1.79082951 8,4" id="Fill-3" fill="#FFFFFF"></path>
                <path d="M16,12 C18.2091705,12 20,13.7907549 20,15.9998333 C20,18.2089117 18.2091705,20 16,20 C13.7908295,20 12,18.2089117 12,15.9998333 C12,13.7907549 13.7908295,12 16,12" id="Fill-5" fill="#FFFFFF"></path>
              </g>
            </g>
          </g>
        </svg>
        Decipher Technology<br />Studios</Brand>
    </AppHeaderWrap>
  );
}

export default AppHeader;