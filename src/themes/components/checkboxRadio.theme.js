import { defineStyle } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const checkboxRadioTheme = defineStyle({
  baseStyle: (props) => ({
    control: {
      _checked: {
        'backgroundColor': mode('primary-light', 'primary-dark')(props),
        'borderColor': mode('primary-light', 'primary-dark')(props),
        '&:hover': {
          backgroundColor: mode('primary-light-l5', 'primary-dark-l5')(props),
          borderColor: mode('primary-light-l5', 'primary-dark-l5')(props),
        },
      },
    },
  }),
});

export default checkboxRadioTheme;
