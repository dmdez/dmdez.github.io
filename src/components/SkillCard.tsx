import { Box, HStack, Heading, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import * as React from 'react';

type Props = {
  name?: string | null;
  description?: string | null;
  date?: string | null;
  onClick?: () => void;
  expanded?: boolean;
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
  D3: 'green',
};

export function SkillCard({ name, description, date, onClick, expanded }: Props) {
  const noOfLines = 2;
  const ref = React.useRef<HTMLDivElement | null>(null);
  const color = name ? colorMap[name] || 'gray' : 'gray';

  return (
    <Box
      position="relative"
      borderLeft="3px solid"
      overflow="hidden"
      textAlign="left"
      mb={1}
      borderRadius={5}
      transition="all .3s"
      sx={{
        cursor: 'pointer',
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
      onClick={onClick}
    >
      <Box p={2}>
        <HStack align="center" justifyContent="space-between">
          <Heading as="h3" fontSize="med" fontWeight="bold">
            {name}
          </Heading>
          <Text fontSize="xs">{date && format(new Date(date), `MMM yyyy`)}</Text>
        </HStack>
        <Text ref={ref} fontSize="sm" mt="2" noOfLines={expanded ? undefined : noOfLines}>
          {description}
        </Text>
      </Box>
    </Box>
  );
}
