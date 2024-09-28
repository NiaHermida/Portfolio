import { defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const buttonTheme = defineStyleConfig({
  baseStyle: (props) => ({
    transition: 'backgroundColor 0.3s ease',
  }),
  variants: {
    solid: (props) => ({
      backgroundColor: mode('primary-light', 'primary-dark')(props),
      color: 'white',
      _hover: {
        backgroundColor: mode('primary-light-l5', 'primary-dark-l5')(props),
        _disabled: {
          backgroundColor: mode('primary-light-l5', 'primary-dark-l5')(props),
        },
      },
      _active: {
        backgroundColor: mode('primary-light-l5', 'primary-dark-l5')(props),
      },
    }),
    outline: (props) => ({
      color: mode('primary-light', 'primary-dark')(props),
      border: '2px solid',
      borderColor: mode('primary-light', 'primary-dark')(props),
      _hover: {
        borderColor: mode('primary-light-l5', 'primary-dark-l5')(props),
        color: mode('primary-light-l5', 'primary-dark-l5')(props),
        _disabled: {
          borderColor: mode('primary-light-l5', 'primary-dark-l5')(props),
          color: mode('primary-light-l5', 'primary-dark-l5')(props),
        },
      },
      _active: {
        borderColor: mode('primary-light-l5', 'primary-dark-l5')(props),
        color: mode('primary-light-l5', 'primary-dark-l5')(props),
      },
    }),
  },
});

export default buttonTheme;
