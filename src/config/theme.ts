import { dimensions, height, width } from 'src/utils/dimensions'

/**
 * Theme For Styled Components
 * -
 */
export const appTheme = {
  background: '#191919',
  orange: '#E4FF1A',
  white: '#FFFFFF',
  grayAAAAAA: '#AAAAAA',
  gray434343: '#434343',
  blue1859FF: '#1859FF',
  black: "#000",
  primary: '#FFF',
  secondary: '#CCC',
  highlight: '#FF2353',
  size: dimensions,
  windowHeight: `${height}px`,
  windowWidth: `${width}px`
}

/**
 * Theme For Expo Navigation Header
 * -
 */
export const navTheme = {
  dark: false,
  colors: {
    background: appTheme.background,
    border: appTheme.grayAAAAAA,
    card: appTheme.background,
    notification: appTheme.highlight,
    primary: appTheme.primary,
    text: appTheme.primary
  }
}
