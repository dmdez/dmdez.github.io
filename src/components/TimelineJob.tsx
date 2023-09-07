import * as React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Marker } from './Marker';
import { SkillTimeline } from './SkillTimeline';
import { JobSummary } from './JobSummary';

type Props = {
  description?: string | null;
  name?: string | null;
  date?: string | null;
  skills: Queries.TimelineYamlSkills[];
};

export function TimelineJob({ name, date, skills, description }: Props) {
  return (
    <>
      <Box
        maxW="container.lg"
        margin="0 auto"
        sx={{
          bgGradient: 'linear(to-r, transparent 0%, gray.300 10%, gray.300 90%, transparent 100%)',
          _dark: {
            bgGradient:
              'linear(to-r, transparent 0%, whiteAlpha.400 10%, whiteAlpha.400 90%, transparent 100%)',
          },
          height: '1px',
        }}
      />
      <Box as="section" maxW="container.lg" margin="0 auto" mb={['4', 0]}>
        <Box
          display="flex"
          flexDir={['column', 'row-reverse']}
          alignItems="stretch"
          className="jobSection"
          // marginBottom="6em"
        >
          <Box
            ml={['4', 0]}
            flexGrow={1}
            flexBasis={0}
            overflow="hidden"
            flex={1}
            sx={{
              borderLeft: '1px dashed',
              borderColor: 'inherit',
            }}
          >
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
            width="100%"
            display="flex"
            flexDir="column"
          >
            <JobSummary name={name} description={description} date={date} />
          </Box>
        </Box>
        {/* <Box textAlign="center" className="marker">
          <Marker>{date && new Date(date).getFullYear()}</Marker>
        </Box> */}
      </Box>
    </>
  );
}
