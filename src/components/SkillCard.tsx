import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';

type Props = {
  name?: string | null;
  description?: string | null;
};

const colorMap: { [key: string]: string } = {
  HTML: 'orange',
  CSS: 'linkedin',
  'Macromedia Flash': 'cyan',
  Photoshop: 'purple',
  Perl: 'blue',
  JavaScript: 'pink',
  MySQL: 'linkedin',
  jQuery: 'yellow',
  '.NET': 'facebook',
  Wordpress: 'cyan',
  Angular: 'orange',
  React: 'red',
  Typescript: 'purple',
};

export function SkillCard({ name, description }: Props) {
  const color = name ? colorMap[name] || 'gray' : 'gray';
  return (
    <Box
      position="relative"
      borderLeft="3px solid"
      overflow="hidden"
      textAlign="left"
      mb={1}
      borderRadius={5}
      transition="background .3s"
      sx={{
        borderColor: `${color}.700`,
        backgroundColor: `${color}.900`,
        '&:hover': {
          backgroundColor: `${color}.600`,
        },
        _light: {
          borderColor: `${color}.300`,
          backgroundColor: `${color}.100`,
          '&:hover': {
            backgroundColor: `${color}.200`,
          },
        },
      }}
    >
      <Box p={2}>
        <Heading as="h3" fontSize="sm" fontWeight="bold">
          {name}
        </Heading>
        <Text fontSize="xs" mt="2">
          {description}
        </Text>
      </Box>
    </Box>
  );
}
