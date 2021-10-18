import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
  mono: `'Menlo', monospace`,
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

export default {
  colors: {
    text: '#000',
    background: '#fff',
    // primary: '#00AA55',
    // primary: '#16A085',
    primary: '#1DDD78',
    // primary: '#00C05E',
    // secondary: '#0086FF'
    secondary: '#0B88EE'
  },
  textStyles,
  fonts,
  breakpoints
};
