import * as React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/popover';
import { useDisclosure } from '@chakra-ui/hooks';
import { Badge, Box, HStack, Heading, Stack, Text } from '@chakra-ui/layout';
import { Button, IconButton } from '@chakra-ui/button';
import { ChevronDownIcon, ChevronUpIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { Show } from '@chakra-ui/media-query';
import { FiMoreHorizontal } from 'react-icons/fi';
type Props = {
  description?: string | null;
  name?: string | null;
  date?: string | null;
};

export function JobSummary({ description, name, date }: Props) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const year = date && new Date(date).getFullYear();

  function renderDescription() {
    return description ? (
      <Text
        fontSize={['xs', 'sm', 'md']}
        fontWeight="thin"
        dangerouslySetInnerHTML={{
          __html: description.replace(/(?:\n\n)/g, '<br><br>'),
        }}
      />
    ) : null;
  }

  return (
    <>
      <Box
        display="flex"
        gap="2"
        my={['2', '8']}
        mb={['2', 0]}
        flexDir={['row', 'column-reverse']}
        flex="1"
        justifyContent="center"
      >
        <Box position="relative">
          <Box
            sx={{
              position: ['static', 'absolute'],
              right: 0,
              top: 0,
              transform: [null, 'translateX(50%)'],
            }}
          >
            <Badge fontSize="1em" variant="solid" className="jobText">
              {year}
            </Badge>
          </Box>
        </Box>
        <Box
          className="jobText"
          flex={'1'}
          display="flex"
          gap="2"
          justifyContent="center"
          flexDir={['row', 'column']}
        >
          <Heading size={['md', 'xl']} mb={[0, '3']}>
            {name}
          </Heading>
          <Box px={[0, '8']} flex={['1', 0]} textAlign={'left'}>
            <Box display={['none', 'block']} textAlign="center">
              {renderDescription()}
            </Box>
            <Show below="sm">
              <Popover isOpen={isOpen} onClose={onClose}>
                <PopoverTrigger>
                  <IconButton
                    variant="outline"
                    isRound
                    onClick={onToggle}
                    aria-label="More Info"
                    size="xs"
                    // icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    icon={<FiMoreHorizontal />}
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody textAlign="left">{renderDescription()}</PopoverBody>
                </PopoverContent>
              </Popover>
            </Show>
          </Box>
        </Box>
      </Box>
      {/* <HStack justifyContent="center" display={['flex', 'none']} my="2">
        <Badge fontSize=".8em" variant="solid">
          {year}
        </Badge>
        <Box>{name}</Box>
        <Box flex="1" textAlign="left">
          <Popover isOpen={isOpen} onClose={onClose}>
            <PopoverTrigger>
              <IconButton
                variant="outline"
                isRound
                onClick={onToggle}
                aria-label="More Info"
                size="xs"
                // icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                icon={<FiMoreHorizontal />}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody textAlign="left">{renderDescription()}</PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </HStack> */}
    </>
  );
}
