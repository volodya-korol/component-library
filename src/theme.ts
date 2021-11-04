import { createGlobalStyle } from 'styled-components';

import { ITheme } from './theme.types';

const color = {
  primary: '#EE8777',
  black: '#22242A',
  white: '#FFFFFF',
  gray: '#C4C4C4',
  fairPink: '#F2E1D6',
  yellow: '#FFCC00',
  orange: '#FF9500',
  pink: '#FF2D55',
  green: '#4CD964',
  redOrange: '#FF3B30',
  lighter: '#F9F9F9',
  light: '#EFEFF4',
  medium: '#C8C7CC',
  dark: '#8A8A8F',
  darker: '#666666',
};

const fonts = {
  body: 'SF Pro Text, sans-serif',
  heading: 'SF Pro Display, sans-serif',
  monospace: 'SF Pro Text, monospace',
};

const fontSizes = {
  l1: '2.5rem',
  l2: '1.75rem',
  l3: '1.375rem',
  l4: '1.25rem',
  m1: '1.0625rem',
  m2: '1rem',
  m3: '0.9375rem',
  s1: '0.8125rem',
  s2: '0.75rem',
  s3: '0.6875rem',
  s4: '0.625rem',
};

const fontWeights = {
  normal: 400,
  medium: 500,
  semiBold: 600,
};

const lineHeights = {
  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: 2,
};

const space = [
  '0rem',
  '0.25rem',
  '0.5rem',
  '1rem',
  '1.5rem',
  '2rem',
  '2.5rem',
  '3rem',
  '3.5rem',
  '4rem',
];

const borders = {
  none: 'none',
  thin: '1px solid #E1E4E8',
  dark: '1px solid #000000',
};

const shadows = {
  low: '0px 2px 4px rgba(0, 0, 0, 0.16)',
  high: '0px 8px 16px rgba(0, 0, 0, 0.16)',
};

const breakpoints = ['40em', '52em', '64em'];

const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
};

const defaultTheme: ITheme = {
  color,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  borders,
  shadows,
  breakpoints,
  mediaQueries,
  variants: {
    text: {
      h1: {
        fontSize: fontSizes.l1,
        fontWeight: fontWeights.semiBold,
        fontFamily: fonts.heading,
      },
      h2: {
        fontSize: fontSizes.l2,
        fontWeight: fontWeights.semiBold,
        fontFamily: fonts.heading,
      },
      h3: {
        fontSize: fontSizes.l3,
        fontWeight: fontWeights.semiBold,
        fontFamily: fonts.heading,
      },
      h4: {
        fontSize: fontSizes.l4,
        fontWeight: fontWeights.semiBold,
        fontFamily: fonts.heading,
      },
      headline: {
        fontSize: fontSizes.m1,
        fontWeight: fontWeights.semiBold,
        fontFamily: fonts.heading,
      },
      subtitle: {
        fontSize: fontSizes.s3,
        fontWeight: fontWeights.normal,
        fontFamily: fonts.body,
      },
      body: {
        fontSize: fontSizes.m1,
        fontWeight: fontWeights.normal,
        fontFamily: fonts.body,
      },
      callout: {
        fontSize: fontSizes.m2,
        fontWeight: fontWeights.normal,
        fontFamily: fonts.body,
      },
      caption1: {
        fontSize: fontSizes.s2,
        fontWeight: fontWeights.normal,
        fontFamily: fonts.body,
      },
      caption2: {
        fontSize: fontSizes.s3,
        fontWeight: fontWeights.normal,
        fontFamily: fonts.body,
      },
      caption3: {
        fontSize: fontSizes.s4,
        fontWeight: fontWeights.normal,
        fontFamily: fonts.body,
      },
    },
  },
};

export const theme: ITheme = {
  ...defaultTheme,
};

export const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "SF Pro Display";
	src: url("./fonts/SFProDisplay/SFProDisplay-Regular.eot");
	src: local("SF Pro Display") url("./fonts/SFProDisplay/SFProDisplay-Regular.eot?#iefix") format("embedded-opentype"),
		url("./fonts/SFProDisplay/SFProDisplay-Regular.woff2") format("woff2"),
		url("./fonts/SFProDisplay/SFProDisplay-Regular.woff") format("woff"),
		url("./fonts/SFProDisplay/SFProDisplay-Regular.ttf") format("truetype");
}

@font-face {
	font-family: "SF Pro Text";
	src: url("./fonts/SFProText/SFProText-Regular.eot");
	src: local("SF Pro Text") url("./fonts/SFProText/SFProText-Regular.eot?#iefix") format("embedded-opentype"),
		url("./fonts/SFProText/SFProText-Regular.woff2") format("woff2"),
		url("./fonts/SFProText/SFProText-Regular.woff") format("woff"),
		url("./fonts/SFProText/SFProText-Regular.ttf") format("truetype");
}
* {
	font-family: SF Pro Text;
	box-sizing: border-box; 
	margin: 0; 
	padding: 0;
}
html {
	font-size: 16px;
}
h1 {
  font-size: ${fontSizes.l1};
  font-weight: ${fontWeights.semiBold};
  font-family: ${fonts.heading};
}
h2 {
  font-size: ${fontSizes.l2};
  font-weight: ${fontWeights.semiBold};
  font-family: ${fonts.heading};
}
h3 {
  font-size: ${fontSizes.l3};
  font-weight: ${fontWeights.semiBold};
  font-family: ${fonts.heading};
}
h4 {
  font-size: ${fontSizes.l4};
  font-weight: ${fontWeights.semiBold};
  font-family: ${fonts.heading};
}
`;
