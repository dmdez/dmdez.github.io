import * as React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export function GradientDivider(props: BoxProps) {
  return (
    <Box
      sx={{
        bgGradient: 'linear(to-r, transparent 0%, gray.300 10%, gray.300 90%, transparent 100%)',
        _dark: {
          bgGradient:
            'linear(to-r, transparent 0%, whiteAlpha.400 10%, whiteAlpha.400 90%, transparent 100%)',
        },
        height: '1px',
      }}
      {...props}
    />
  );
}
