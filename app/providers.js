"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { SnackbarProvider } from "notistack";
import App from "@modules/App";
import theme from "@themes/default.theme";

export const Providers = ({ children }) => {
  return (
    <div>
      <SnackbarProvider maxSnack={2}>
        <ChakraProvider theme={theme}>
          <App>{children}</App>
        </ChakraProvider>
      </SnackbarProvider>
    </div>
  );
};
