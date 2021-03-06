import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import { ApplicationState } from "#/core/store/store";
import { animestreamTheme } from "#/core/themes/animestream-theme";
import { ThemeProviderProps } from "#/core/themes/components/theme-provider/types";
import { ThemeState } from "#/core/themes/store/types";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { color, background } = useSelector<ApplicationState, ThemeState>((state) => state.theme);
  const theme = animestreamTheme(color, background);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
