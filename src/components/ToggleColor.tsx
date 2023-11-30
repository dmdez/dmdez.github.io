import * as React from 'react';
import { Box, chakra, shouldForwardProp, useColorMode } from '@chakra-ui/react';
import { HiOutlineLightBulb, HiLightBulb } from 'react-icons/hi2';
import { animated, easings, useSpring } from '@react-spring/web';
import { isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(animated.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export function ToggleColor() {
  const { toggleColorMode, colorMode } = useColorMode();
  const sProps = useSpring({
    from: { rotate: 1 },
    config: {
      duration: 20000,
      easing: easings.easeOutBack,
    },
  });

  function handleClick() {
    toggleColorMode();
    sProps.rotate.start({
      from: {
        rotate: 0,
      },
      to: {
        rotate: 1,
      },
    });
  }

  return (
    <ChakraBox
      sx={{
        position: 'fixed',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: '.3s opacity',
        transformOrigin: 'center -50%',
        _hover: {
          opacity: 1,
        },
      }}
      style={{
        translateX: '-100%',
        opacity: sProps.rotate.to({ range: [1, 0], output: [0.4, 1] }),
        rotate: sProps.rotate.to({
          range: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          output: [
            '-23deg',
            '17deg',
            '-15deg',
            '10deg',
            '-6deg',
            '5deg',
            '-3deg',
            '2deg',
            '-1deg',
            '.5deg',
            '0deg',
          ],
        }),
      }}
    >
      <Box
        sx={{
          borderLeft: '1px dotted',
          height: '2em',
        }}
      />

      <Box
        as="button"
        onClick={handleClick}
        sx={{
          fontSize: ['2em', '3em'],
          transform: `rotate(180deg)`,
          color: 'gray.400',
          _dark: { color: 'yellow.100' },
        }}
      >
        {colorMode === 'dark' ? <HiLightBulb /> : <HiOutlineLightBulb />}
      </Box>
    </ChakraBox>
  );
}
