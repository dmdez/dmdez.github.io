import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Box, HStack, Heading, Text } from '@chakra-ui/react';
import { orderBy } from 'lodash';
import { Marker } from './Marker';
import { SkillTimeline } from './SkillTimeline';

export function Timeline() {
  const timeline = useStaticQuery<Queries.TimelineQuery>(graphql`
    query Timeline {
      allTimelineYaml {
        nodes {
          id
          name
          date
          description
          skills {
            name
            startDate
            endDate
            description
          }
        }
      }
    }
  `);
  const data = timeline.allTimelineYaml.nodes;

  return (
    <Box
      position="relative"
      pt={20}
      sx={{
        '& section:nth-of-type(even)': {
          transform: [null, 'rotateY(180deg)'],
          '& .skills,.jobDescription,.marker': {
            transform: [null, 'rotateY(180deg)'],
          },
        },
      }}
    >
      {orderBy(data, 'date', 'desc').map(({ name, date, skills, description }, i) => {
        return (
          <Box key={i} as="section" maxW="container.lg" margin="0 auto">
            <HStack
              flexDir={['column-reverse', 'row-reverse']}
              spacing="0"
              alignItems="center"
              className="jobSection"
              marginBottom="6em"
            >
              <Box flexGrow={1} flexBasis={0} overflow="hidden" flex={1}>
                {name && (
                  <SkillTimeline
                    skills={(skills || []).map((skill) => ({
                      description: skill?.description || '',
                      endDate: skill?.endDate || '',
                      name: skill?.name || '',
                      startDate: skill?.startDate || '',
                    }))}
                  />
                )}
              </Box>
              <Box
                flexGrow={1}
                flexBasis={0}
                textAlign="center"
                className="jobDescription"
                mb={[0, '5em']}
              >
                <Box p="5">
                  <Heading size="xl" mb="3">
                    {name}
                  </Heading>
                  {description && (
                    <Text
                      fontSize="md"
                      fontWeight="thin"
                      dangerouslySetInnerHTML={{
                        __html: description.replace(/(?:\n\n)/g, '<br><br>'),
                      }}
                    />
                  )}
                </Box>
              </Box>
            </HStack>
            <Box textAlign="center" className="marker">
              <Marker>{date && new Date(date).getFullYear()}</Marker>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
