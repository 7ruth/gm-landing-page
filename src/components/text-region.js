// text-region.js

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  FONT_SIZE_HERO,
  FONT_WEIGHT_DEMI,
  SPACING_BASE,
  FONT_SIZE_LG,
  SCREEN_MD_MIN,
  WIDTH_TEXT_COLUMN_MAX,
  FONT_SIZE_BASE,
  edgePadding,
  COLOR_BRAND_PRIMARY
} from "../styleVariables";

TextRegion.propTypes = {
  children: PropTypes.oneOf([PropTypes.array, PropTypes.object]),
  cols: PropTypes.bool,
  offset: PropTypes.bool,
  staggered: PropTypes.bool
};

const COLUMN_GUTTER = SPACING_BASE;

const TextRegionWrapper = styled.div`
	text-align: left;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	max-width: ${WIDTH_TEXT_COLUMN_MAX};
	width: 100%;
	${edgePadding};

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-bottom: 0;
		line-height: 1.5;

		+ h1,
		+ h2,
		+ h3,
		+ h4,
		+ h5 {
			margin-top: 0.125em;
		}
	}

	h1 {
		font-size: ${FONT_SIZE_HERO};
	}

	h2 {
		font-size: ${FONT_SIZE_LG};
	}

	h3 {
		font-size: ${FONT_SIZE_BASE};
		font-weight: ${FONT_WEIGHT_DEMI};
		letter-spacing: 0.06em;
		opacity: 0.8;
		text-transform: uppercase;
	}

	h4 {
		font-size: ${FONT_SIZE_BASE};
		font-weight: ${FONT_WEIGHT_DEMI};
	}

	h5 {
		font-size: ${FONT_SIZE_BASE};
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	h6 {
		font-size: ${FONT_SIZE_BASE};
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	p {
		margin-top: 0.5em;

		> strong:first-child:last-child {
			display: block;
		}
	}

	ul {
		padding-left: 0;
		font-size: ${FONT_SIZE_BASE};
		list-style: none;

		li {
			margin-bottom: 0.5em;
			padding-left: 1em;

			&:before {
				content: '•';
				display: inline-block;
				color: ${COLOR_BRAND_PRIMARY};
				margin-left: -1em;
				text-align: left;
				width: 1em;
			}
		}
	}

	strong, b {
		font-weight: ${FONT_WEIGHT_DEMI};
	}

	${props =>
    props.cols &&
    `
		display: flex;
		flex-direction: column;
		justify-content: space-between: 

		> * {
			width: 100%;
		}

		@media all and (min-width: ${SCREEN_MD_MIN}) {
			align-items: center;
			flex-direction: row;

			> * {
				flex: 1 1 100%;
				padding-right: ${parseInt(COLUMN_GUTTER, 10) * 2}px;
			}
		}
	`}

	${props =>
    props.staggered &&
    `
    > * {
      @media all and (min-width: ${SCREEN_MD_MIN}) {
        margin-top: 5em;

        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-top: 10em;
        }
      }
		}
	`}

	${props =>
    props.offset &&
    `
		> *:first-child {
			margin-left: calc(100% / 2);
		}
	`}

	header {
		padding-left: 0;
		padding-right: 0;
	}

`;

export default function TextRegion({ cols, offset, staggered, children }) {
  return (
    <TextRegionWrapper cols={cols} offset={offset} staggered={staggered}>
      {children}
    </TextRegionWrapper>
  );
}
