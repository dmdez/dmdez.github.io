import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Box,
  HStack,
  Heading,
  IconButton,
  Show,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { orderBy } from 'lodash';
import { Marker } from './Marker';
import { SkillTimeline } from './SkillTimeline';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { JobSummary } from './JobSummary';

type Props = {
  description?: string | null;
  name?: string | null;
  date?: string | null;
  skills: Queries.TimelineYamlSkills[];
};

export function TimelineJob({ name, date, skills, description }: Props) {
  return (
    <Box as="section" maxW="container.lg" margin="0 auto">
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
            <JobSummary name={name} description={description} />
          </Box>
        </Box>
      </HStack>
      <Box textAlign="center" className="marker">
        <Marker>{date && new Date(date).getFullYear()}</Marker>
      </Box>
    </Box>
  );
}
