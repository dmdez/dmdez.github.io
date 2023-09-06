import * as React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/popover';
import { useDisclosure } from '@chakra-ui/hooks';
import { HStack, Heading, Text } from '@chakra-ui/layout';
import { Button, IconButton } from '@chakra-ui/button';
import { ChevronDownIcon, ChevronUpIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { Show } from '@chakra-ui/media-query';

type Props = {
  description?: string | null;
  name?: string | null;
};

export function JobSummary({ description, name }: Props) {
  const { isOpen, onToggle, onClose } = useDisclosure();

  function renderDescription() {
    return description ? (
      <Text
        fontSize="md"
        fontWeight="thin"
        dangerouslySetInnerHTML={{
          __html: description.replace(/(?:\n\n)/g, '<br><br>'),
        }}
      />
    ) : null;
  }

  return (
    <>
      <Show above="sm">
        <Heading size="xl" mb="3">
          {name}
        </Heading>
        {renderDescription()}
      </Show>
      <Show below="sm">
        <HStack justifyContent="center">
          <Popover isOpen={isOpen} onClose={onClose}>
            <PopoverTrigger>
              <Button
                variant="ghost"
                onClick={onToggle}
                rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              >
                {name}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              {/* <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>About</PopoverHeader> */}
              <PopoverBody>{renderDescription()}</PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
      </Show>
    </>
  );
}
