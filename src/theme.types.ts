import 'styled-components';

export interface ITheme {
  color: {
    primary: string;
    black: string;
    white: string;
    gray: string;
    fairPink: string;
    yellow: string;
    orange: string;
    pink: string;
    green: string;
    redOrange: string;
    lighter: string;
    light: string;
    medium: string;
    dark: string;
    darker: string;
  };
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontSizes: {
    l1: string;
    l2: string;
    l3: string;
    l4: string;
    m1: string;
    m2: string;
    m3: string;
    s1: string;
    s2: string;
    s3: string;
    s4: string;
  };
  fontWeights: {
    normal: number;
    medium: number;
    semiBold: number;
  };
  lineHeights: {
    normal: string;
    none: number;
    shorter: number;
    short: number;
    base: number;
    tall: number;
    taller: number;
  };
  space: string[] | number[];
  borders: {
    thin: string;
  };
  shadows: {
    low: string;
    high: string;
  };
  breakpoints: string[] | number[];
  mediaQueries: {
    small: string;
    medium: string;
    large: string;
  };
  variants: {
    text: {
      h1: any;
      h2: any;
      h3: any;
      h4: any;
      headline: any;
      subtitle: any;
      body: any;
      callout: any;
      caption1: any;
      caption2: any;
      caption3: any;
    };
  };
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ITheme {}
}
