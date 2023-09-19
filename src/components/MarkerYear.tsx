import * as React from 'react';
import { Badge, Box } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

export function MarkerYear() {
  return (
    <>
      <Box
        sx={{
          position: 'sticky',
          top: '1em',
          zIndex: 10,
          textAlign: 'center',
          width: '2.4em',
          margin: '0 auto',
        }}
      >
        <Box
          as="a"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.document.body.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
          sx={{
            border: '2px solid white',
            borderRadius: '50%',
            display: 'inline-block',
            backgroundColor: 'secondary.500',
            height: '2.4em',
            width: '2.4em',
            textAlign: 'center',
            lineHeight: '1.9em',
            boxShadow: '0 0 10px #00000055',
            ml: [1, 0],
          }}
        >
          <ArrowUpIcon
            sx={{
              fontSize: '2em',
              color: 'white',
            }}
          />
        </Box>
      </Box>
      <Box mb="4" mx="4" mt="3" textAlign={['left', 'center']}>
        <Badge fontSize="1em" variant="solid" colorScheme="secondary">
          {new Date().getFullYear()}
        </Badge>
      </Box>
    </>
  );
}
