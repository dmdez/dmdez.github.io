import * as React from 'react';
import type { HeadFC } from 'gatsby';
import {
  Box,
  Container,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
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
          <Box py={[10, 20]} bgGradient="radial(#ffffff11 0%, #ffffff00 60%)" textAlign="center">
            <Text fontSize="x-large" fontWeight="thin" mb="2">
              👋 hello, my name is
            </Text>
            <Heading
              size={['3xl', '4xl']}
              sx={{
                textShadow: '10px 10px 4px rgba(0,0,0,.25)',
                _dark: { textShadow: '10px 10px 4px black' },
              }}
            >
              deric mendez
            </Heading>
          </Box>
        </Container>
      </Box>
      <Tabs align="center">
        <TabList>
          <Tab>Career</Tab>
          <Tab>Hobbies</Tab>
        </TabList>
        <TabPanels position="relative" zIndex="1">
          <TabPanel>
            <Box
              position={'relative'}
              sx={{
                display: ['flex', 'block'],
                flexDir: 'row-reverse',
                ml: [4, 0],
                mt: 8,
              }}
            >
              <Timeline />
              <Box
                sx={{
                  position: ['relative', 'static'],
                }}
              >
                <MarkerYear />
                <Box
                  sx={{
                    borderLeft: '1px dashed',
                    height: 'calc(100% - 5em)',
                    position: 'absolute',
                    left: '50%',
                    opacity: 0.5,
                    bottom: 0,
                  }}
                />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>DM - deric mendez</title>;
