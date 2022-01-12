import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
  mono: `'IBM Plex Mono', monospace`,
  //sans: "'Karla', sans-serif",
  //sans: "'Open Sans', sans-serif",
  orbitron: "'Orbitron', sans-serif",
  serif: "'Open Sans', sans-serif",
  sans: "'Open Sans', sans-serif"
  // serif: "'Sans', sans-serif"
  // serif: "'Lora', serif;"
};

const breakpoints = createBreakpoints({
  sm: '48em',
  md: '64em',
  lg: '124em',
  xl: '150em'
});

const textStyles = {
  h1: {
    fontSize: '72px',
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-2%'
  },
  h2: {
    fontSize: '48px',
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%'
  }
};

const primaryScale = {
  primary1: '#1DDD78',
  primary2: '#00B150',
  primary3: '#00862A',
  primary4: '#005C00',
  primary5: '#003600'
};

const secondaryScale = {
  secondary1: '#0B88EE',
  secondary2: '#006CCE',
  secondary3: '#0052AF',
  secondary4: '#003990',
  secondary5: '#002373'
};

const grayScale = {
  gray1: '#f8faf9',
  gray2: '#eaefec',
  gray3: '#dbe3de',
  gray4: '#cad6cf',
  gray5: '#b8c7bf',
  gray6: '#a4b8ad',
  gray7: '#8ca698',
  gray8: '#71907f',
  gray8: '#587264',
  gray10: '#34433b'
};

export default {
  colors: {
    text: '#000',
    background: '#fff',
    ...primaryScale,
    ...secondaryScale,
    ...grayScale,
    info: '#1DDD78',
    // info: '#0AADFF',
    warning: '#FF5E13',
    error: '#DC143C'
  },
  textStyles,
  fonts,
  breakpoints
};
