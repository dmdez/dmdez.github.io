// src/@chakra-ui/gatsby-plugin/theme.js
import { defineStyle, defineStyleConfig, extendTheme, theme, withDefaultColorScheme, StyleFunctionProps } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";

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

// ffffcc
export default extendTheme({
    initialColorMode: 'dark',
  colors: {
    primary: theme.colors.facebook,
    // secondary: theme.colors.blue
  },
  components: {
    Heading
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