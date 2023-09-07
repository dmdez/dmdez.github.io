import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { Timeline } from '../components/Timeline';
import { ToggleColor } from '../components/ToggleColor';
import { MarkerYear } from '../components/MarkerYear';

const IndexPage: React.FC = () => {
  return (
    <Box as="main">
      <Box
        sx={{
          bgGradient: 'linear(gray.200, transparent)',
          _dark: {
            bgGradient: 'linear(gray.900, transparent)',
          },
        }}
      >
        <Container maxW="container.lg" position="relative">
          <Box position="absolute" top="0" right="1em">
            <ToggleColor />
          </Box>
          <Box py={10} bgGradient="radial(#ffffff11 0%, #ffffff00 60%)" textAlign="center">
            <Text
              fontSize="x-large"
              fontWeight="thin"
              mb="2"
              sx={{
                _before: {
                  content: `"👋"`,
                  position: 'absolute',
                  transform: 'translateX(-100%)',
                  display: 'inline-block',
                  marginLeft: '-.5em',
                },
              }}
            >
              hello, my name is
            </Text>
            <Heading
              size={['3xl', '4xl']}
              sx={{
                textShadow: '10px 10px 4px rgba(0,0,0,.15)',
                _dark: { textShadow: '10px 10px 4px black' },
              }}
            >
              deric mendez
            </Heading>
            <Container>
              <Text fontSize={['small', 'large']} fontWeight="thin" mt={['5', '10']}>
                I enjoy planning and building user experiences for web applications of all kinds.
                Below, you can get a glimpse of my career and skillsets over since 2000.
              </Text>
            </Container>
          </Box>
        </Container>
      </Box>

      <MarkerYear />

      <Box
        sx={{
          borderBottom: '1px solid',
          borderTop: '1px solid',
          borderColor: 'inherit',
          _light: {
            bg: 'gray.50',
          },
          _dark: {
            bg: 'gray.900',
          },
          position: 'relative',
        }}
      >
        <Box position={'relative'} px="4">
          <Timeline />
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>DM - deric mendez</title>;
