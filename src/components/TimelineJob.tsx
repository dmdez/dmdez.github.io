import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { SkillTimeline } from './SkillTimeline';
import { JobSummary } from './JobSummary';
import { GradientDivider } from './GradientDivider';

type Props = {
  description?: string | null;
  name?: string | null;
  date?: string | null;
  skills: Queries.TimelineYamlSkills[];
};

export function TimelineJob({ name, date, skills, description }: Props) {
  return (
    <>
      <GradientDivider maxW="container.lg" margin="0 auto" />
      <Box as="section" maxW="container.lg" margin="0 auto" mb={['4', 0]}>
        <Box
          display="flex"
          flexDir={['column', 'row-reverse']}
          alignItems="stretch"
          className="jobSection"
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
      </Box>
    </>
  );
}
