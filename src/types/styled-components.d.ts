import theme from `styles/theme`;

type Theme = typeof theme;

declare module 'styles-components' {
  export interface DefaultTheme extends Theme {}
}
