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
  const data = orderBy(timeline.allTimelineYaml.nodes, 'date', 'desc');

  return (
    <Box
      position="relative"
      sx={{
        '& section:nth-of-type(even)': {
          transform: [null, 'rotateY(180deg)'],
          '& .skills,.jobText': {
            transform: [null, 'rotateY(180deg)'],
          },
        },
      }}
    >
      {data.map(({ name, date, skills, description }, i) => (
        <TimelineJob
          key={i}
          name={name}
          date={date}
          skills={(skills || []).map((skill) => ({
            description: skill?.description || '',
            endDate: skill?.endDate || '',
            name: skill?.name || '',
            startDate: skill?.startDate || '',
            link: skill?.startDate || '',
          }))}
          description={description}
        />
      ))}
    </Box>
  );
}
