import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      neutral100: "#F2F2F2";
      neutral300: "#DEDEDE";
      neutral600: "#9F9F9F";
      neutral700: "#7D7D7D";
      green500: "#2BC9BA";
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    neutral100: "#F2F2F2",
    neutral300: "#DEDEDE",
    neutral600: "#9F9F9F",
    neutral700: "#7D7D7D",
    green500: "#2BC9BA",
  },
};
