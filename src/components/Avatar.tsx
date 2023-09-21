import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Avatar as ChakraAvatar } from '@chakra-ui/react';
import { orderBy } from 'lodash';
import { TimelineJob } from './TimelineJob';

export function Avatar() {
  const { profile } = useStaticQuery<Queries.ProfileQuery>(graphql`
    query Profile {
      profile {
        avatar_url
      }
    }
  `);

  return profile?.avatar_url ? (
    <ChakraAvatar
      name="Deric Mendez"
      size="md"
      src={profile.avatar_url}
      sx={{
        boxShadow: '2px 2px 4px rgba(0,0,0,.4)',
        border: '1px solid white',
        transition: 'transform .3s',
        transform: 'scale(.8) rotate(8deg)',
        _hover: {
          transform: 'scale(1) rotate(0)',
        },
      }}
    />
  ) : null;
}
