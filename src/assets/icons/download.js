import React from 'react';

export default class DownloadIcon extends React.Component {
  render() {
    return (
      <svg width="19px" height="19px" viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g stroke="currentColor">
            <circle cx="9.5" cy="9.5" r="9" />
            <g id="Group" transform="translate(9.5, 9.5) scale(1, -1) translate(-9.5, -9.5) translate(6, 6)" strokeLinecap="round">
              <path d="M3.5,7 L3.5,1"  />
              <polyline points="6.5 3.5 3.5 0.5 0.5 3.5" />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}