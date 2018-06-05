import { injectGlobal } from "styled-components";

/*/ Colors /*/
export const COLOR_BRAND_PRIMARY = "#0aab2a";
export const COLOR_BRAND_SECONDARY = "#002e6e";

export const COLOR_RED = "#E4251A";
export const COLOR_BLACK = "#000";
export const COLOR_GREEN = "#0aab2a";
export const COLOR_WHITE = "#fff";
export const COLOR_GREY = "#444";

export const COLOR_HIGHLIGHT = COLOR_BRAND_PRIMARY;
export const COLOR_SUCCESS = "#0aab2a";
export const COLOR_PRIMARY = "#fff";
export const COLOR_DANGER = COLOR_RED;
export const COLOR_WARNING = "#FAC60F";
export const COLOR_INFO = "blue";

export const COLOR_CONTENT_BACKGROUND = "#ffffff";
export const COLOR_CONTENT = "#000000";

/*/ Typography /*/
export const LINE_HEIGHT_BASE = 1.65;
export const FONT_WEIGHT_LIGHT = 100;
export const FONT_WEIGHT_REGULAR = 400;
export const FONT_WEIGHT_MEDIUM = 500;
export const FONT_WEIGHT_DEMI = 600;
export const FONT_WEIGHT_BOLD = 800;
export const FONT_WEIGHT_BASE = FONT_WEIGHT_REGULAR;
export const FONT_SIZE_HERO_LG = "64px";
export const FONT_SIZE_HERO = "44px";
export const FONT_SIZE_LG = "24px";
export const FONT_SIZE_BASE = "18px";
export const FONT_SIZE_SM = "14px";
export const FONT_SIZE_XS = "11px";

/*/ Layout /*/
export const WIDTH_TEXT_COLUMN_MAX = "1200px";
export const SPACING_BASE = "16px";
export const APP_HEADER_HEIGHT_SHORT = "44px";
export const APP_HEADER_HEIGHT_LONG = "64px";
export const LOCAL_NAV_HEIGHT = "44px";

// Edge Padding
export const EDGE_PADDING_XS = "12px";
export const EDGE_PADDING_SM = "18px";
export const EDGE_PADDING_MD = "24px";
export const EDGE_PADDING_LG = "32px";

// Screens
export const SCREEN_XS_MIN = "0px";
export const SCREEN_SM_MIN = "576px";
export const SCREEN_MD_MIN = "768px";
export const SCREEN_LG_MIN = "992px";
export const SCREEN_XL_MIN = "1200px";

/*/ Transitions /*/
export const TRANSITION_DURATION_BASE = "0.2s";
export const TRANSITION_TIMING_FUNCTION_BASE = "ease";

export const contentVerticalSpacing = "calc(32px + 2vw + 5vh)";

injectGlobal`

`;

// export function edgePadding() {
// 	return `
// 		padding-left: ${EDGE_PADDING_XS};
// 		padding-right: ${EDGE_PADDING_XS};

// 		@media all and (min-width: ${SCREEN_SM_MIN}) {
// 			padding-left: ${EDGE_PADDING_SM};
// 			padding-right: ${EDGE_PADDING_SM};
// 		}

// 		@media all and (min-width: ${SCREEN_MD_MIN}) {
// 			padding-left: ${EDGE_PADDING_MD};
// 			padding-right: ${EDGE_PADDING_MD};
// 		}

// 		@media all and (min-width: ${SCREEN_LG_MIN}) {
// 			padding-left: ${EDGE_PADDING_LG};
// 			padding-right: ${EDGE_PADDING_LG};
// 		}
// 	`;
// }


export function edgePadding() {
	return `
		padding-left: ${EDGE_PADDING_XS};
		padding-right: ${EDGE_PADDING_XS};

		@media all and (min-width: ${SCREEN_SM_MIN}) {
			padding-left: ${EDGE_PADDING_SM};
			padding-right: ${EDGE_PADDING_SM};
		}

		@media all and (min-width: ${SCREEN_MD_MIN}) {
			padding-left: ${EDGE_PADDING_MD};
			padding-right: ${EDGE_PADDING_MD};
		}

		@media all and (min-width: ${SCREEN_LG_MIN}) {
			padding-left: ${EDGE_PADDING_LG};
			padding-right: ${EDGE_PADDING_LG};
		}
	`;
}
