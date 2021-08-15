// theme.js
import { extendTheme } from '@chakra-ui/react';

// Component style overrides
import components from './components';
// Foundational style overrides
import foundations from './foundations';
// Global style overrides
import styles from './styles';

const overrides = {
  ...styles,
  ...foundations,
  components
};

export default extendTheme(overrides);
