// theme.ts
import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  colors: {
    main: "cyan",
    secondary: "magenta",
  },
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },
};