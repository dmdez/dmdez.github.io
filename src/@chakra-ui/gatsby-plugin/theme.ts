// src/@chakra-ui/gatsby-plugin/theme.js
import { defineStyle, defineStyleConfig, extendTheme, theme, withDefaultColorScheme } from '@chakra-ui/react'

const Heading = defineStyleConfig({
  // Styles for the base style
  baseStyle: defineStyle((props) => ({
    fontWeight: 'hairline',
  })),
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
})


const myTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.cyan,
    // secondary: theme.colors.linkedin,
    secondary: {
      "50": "#fff8fb",
      "100": "#feedf5",
      "200": "#fde0ee",
      "300": "#fcc4df",
      "400": "#f988be",
      "500": "#d8488d",
      "600": "#91305e",
      "700": "#5f203d",
      "800": "#381325",
      "900": "#2d0f1d"
    }
  },
  components: {
    Heading,
  },
  // https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/semantic-tokens.ts#L4
  semanticTokens: {
    colors: {
    //   'chakra-body-bg': { _dark: 'primary.900' },
    //   'chakra-placeholder-color': { _light: fontColors.placeholder },
    },
  },
}, withDefaultColorScheme({
  colorScheme: 'primary'
}))

export default myTheme;