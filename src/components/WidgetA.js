import React from 'react';

function WidgetA() {
  return (
    <svg width="72" height="42" viewBox="0 0 72 42" xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <circle id="path-1" cx="2.5" cy="2.5" r="2.5" />
        <circle id="path-2" cx="2.5" cy="2.5" r="2.5" />
        <circle id="path-3" cx="2.5" cy="2.5" r="2.5" />
        <circle id="path-4" cx="31" cy="17" r="12" />
      </defs>
      <g id="widget-a" fill="none" fillRule="evenodd">
        <g id="Group" transform="translate(4 3)">
          <g id="dingus" transform="rotate(21 -5.082 6.5)">
            <polygon id="Line" fill="#2FBE4C" fillRule="nonzero" points="3 3 3 2 33 2 33 3"
            />
            <g id="Oval-3">
              <use fill="#FFF" xlinkHref="#path-1" />
              <use fill="#2FBE4C" xlinkHref="#path-1" />
              <circle stroke="#2FBE4C" cx="2.5" cy="2.5" r="2" />
            </g>
          </g>
          <g id="dingus" transform="rotate(137 23.121 11.515)">
            <polygon id="Line" fill="#2FBE4C" fillRule="nonzero" points="3 3 3 2 21 2 21 3"
            />
            <g id="Oval-3">
              <use fill="#FFF" xlinkHref="#path-2" />
              <use fill="#2FBE4C" xlinkHref="#path-2" />
              <circle stroke="#2FBE4C" cx="2.5" cy="2.5" r="2" />
            </g>
          </g>
          <g id="dingus" transform="rotate(-156 31.126 9.312)">
            <polygon id="Line" fill="#2FBE4C" fillRule="nonzero" points="3 3 3 2 28 2 28 3"
            />
            <g id="Oval-3">
              <use fill="#FFF" xlinkHref="#path-3" />
              <use fill="#2FBE4C" xlinkHref="#path-3" />
              <circle stroke="#2FBE4C" cx="2.5" cy="2.5" r="2" />
            </g>
          </g>
          <g id="Oval">
            <use fill="#000" xlinkHref="#path-4" />
            <circle stroke="#2FBE4C" strokeWidth="2" cx="31" cy="17" r="11" />
          </g>
        </g>
      </g>
    </svg>
  )
}
export default WidgetA;