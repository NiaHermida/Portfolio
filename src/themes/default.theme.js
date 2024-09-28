import { extendTheme } from '@chakra-ui/react';
import components from './components';
import colors from './colors';
import config from './config';

const theme = extendTheme({
  config,
  colors,
  components,
});

export default theme;
