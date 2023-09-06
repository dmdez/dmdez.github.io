import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Box } from '@chakra-ui/react';
import { orderBy } from 'lodash';
import { TimelineJob } from './TimelineJob';

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
      pt={[0, 20]}
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
          <TimelineJob
            name={name}
            date={date}
            skills={(skills || []).map((skill) => ({
              description: skill?.description || '',
              endDate: skill?.endDate || '',
              name: skill?.name || '',
              startDate: skill?.startDate || '',
            }))}
            description={description}
          />
        );
      })}
    </Box>
  );
}
