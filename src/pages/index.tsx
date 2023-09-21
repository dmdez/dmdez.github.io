import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Box, Container, HStack, Heading, Icon, IconButton, Text } from '@chakra-ui/react';
import { Timeline } from '../components/Timeline';
import { ToggleColor } from '../components/ToggleColor';
import { MarkerYear } from '../components/MarkerYear';
import { TfiGithub } from 'react-icons/tfi';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { GradientDivider } from '../components/GradientDivider';
import { Avatar } from '../components/Avatar';
const IndexPage: React.FC = () => {
  return (
    <Box as="main" mb="20">
      <Box
        sx={{
          bgGradient: 'linear(gray.200, transparent)',
          _dark: {
            bgGradient: 'linear(gray.900, transparent)',
          },
        }}
      >
        <Container maxW="container.lg" position="relative" pt="8">
          <Box position="absolute" top="0" right="1em">
            <ToggleColor />
          </Box>
          <Box
            pt={10}
            pb={[0, 5]}
            bgGradient="radial(#ffffff11 0%, #ffffff00 60%)"
            textAlign="center"
          >
            <HStack justifyContent="center" spacing="4">
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
              <Avatar />
            </HStack>
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
              <Text fontSize={['md', 'large']} fontWeight="thin" mt={['5', '10']} mb="2">
                I enjoy planning and building user experiences for web applications of all kinds
                with collaborative project teams. Below, you can get a glimpse of my career and
                skillsets since 2000.
              </Text>
              <Box p="5">
                <Box as="span">
                  <Icon as={FaHeart} fontSize="12" color="secondary.500" />
                </Box>
                <Box ml="2" fontWeight="extrabold" as="span">
                  I Love
                </Box>
                <Box ml="2" as="span" fontWeight="thin">
                  Family, cooking and disc golf.
                </Box>
              </Box>
              <GradientDivider />
              <HStack my="8" spacing="5" justifyContent="center">
                <IconButton
                  isRound
                  variant="outline"
                  aria-label="GitHub"
                  icon={<Icon as={TfiGithub} />}
                  as="a"
                  href="https://github.com/dmdez"
                />
                <IconButton
                  isRound
                  variant="outline"
                  aria-label="Email"
                  icon={<Icon as={MdOutlineEmail} />}
                  as="a"
                  href="mailto:dmmendez@gmail.com"
                />
              </HStack>
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

export const Head: HeadFC = () => <title>deric mendez</title>;
