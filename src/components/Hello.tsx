import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Text } from '@chakra-ui/react';

export function Hello() {
  const { profile } = useStaticQuery<Queries.ProfileQuery>(graphql`
    query Profile {
      profile {
        avatar_url
      }
    }
  `);

  return (
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
        _hover: {
          _after: {
            transform: 'scale(1.2) rotate(8deg)',
          },
        },
        _after: {
          display: 'inline-block',
          content: '""',
          width: '10',
          height: '10',
          background: `transparent url('${profile?.avatar_url}}') no-repeat`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          border: '1px solid white',
          boxShadow: '2px 2px 4px rgba(0,0,0,.4)',
          position: 'absolute',
          marginLeft: '.5em',
          transition: 'transform .3s',
        },
      }}
    >
      hello, my name is
    </Text>
  );
}
