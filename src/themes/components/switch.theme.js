import { defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const switchTheme = defineStyleConfig({
  baseStyle: (props) => ({
    track: {
      _checked: {
        'backgroundColor': mode('primary-light', 'primary-dark')(props),
        '&:hover': {
          backgroundColor: mode('primary-light-l5', 'primary-dark-l5')(props),
        },
      },
    },
  }),
});

export default switchTheme;
