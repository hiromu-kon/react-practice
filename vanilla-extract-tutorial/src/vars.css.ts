import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme('#root', {
  colors: {
    primary: 'green',
    secondary: 'blue'
  }
})