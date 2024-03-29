import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { max, min, orderBy } from 'lodash';
import { scaleTime, timeDay } from 'd3';
import { useTimelineConnectors } from '../hooks/useTimelineConnectors';
import { SkillCard } from './SkillCard';

function getMinMaxFromData(d: Queries.TimelineYamlSkills[]) {
  const startDates = d.map(({ startDate }) =>
    startDate ? new Date(startDate).valueOf() : undefined,
  );
  const endDates = d.map(({ endDate }) =>
    endDate ? new Date(endDate).valueOf() : Date.now().valueOf(),
  );
  const minDate = min(startDates) || 0;
  const maxDate = max(endDates) || 0;
  return { minDate, maxDate };
}

type Props = {
  skills: Queries.TimelineYamlSkills[];
};

export function SkillTimeline({ skills }: Props) {
  const [activeIndex, setActiveIndex] = React.useState<number | undefined>();
  const [expandedIndex, setExpandedIndex] = React.useState<number | undefined>();
  const { minDate, maxDate } = getMinMaxFromData(skills);
  const range = [minDate, maxDate];
  const x = scaleTime().domain(range).nice(timeDay);
  const sortedSkills = orderBy(skills, 'startDate', 'desc');
  const { rootRef, dotRefs, cardRefs } = useTimelineConnectors({
    skills,
    rerenderCount: expandedIndex,
  });

  return (
    <Box
      display="flex"
      ref={rootRef}
      mb={[0]}
      position="relative"
      flexDir="row"
      height="100%"
      sx={{
        '.connect': {
          opacity: 0.4,
          transition: 'all .3s',
        },
        [`.connect-${activeIndex}`]: {
          opacity: 1,
          '& path': {
            strokeWidth: '2px',
          },
        },
      }}
    >
      <Box position="relative">
        {sortedSkills.map((skill, i) => (
          <Box
            ref={(el) => {
              if (dotRefs.current && el) {
                dotRefs.current[i] = el;
              }
            }}
            key={skill.name}
            onMouseOver={() => setActiveIndex(i)}
            onMouseOut={() => setActiveIndex(undefined)}
            sx={{
              position: 'absolute',
              left: 0,
              bottom: `${(skill.startDate ? x(new Date(skill.startDate)) : 0) * 100}%`,
              width: '8px',
              height: '8px',
              background: 'currentColor',
              transition: 'all .3s',
              opacity: activeIndex === i ? 1 : 0.6,
              transform: `translateX(-50%) rotate(45deg) ${activeIndex === i ? 'scale(1.4)' : ''}`,
            }}
          />
        ))}
      </Box>
      <Box flex="1"></Box>
      <Box position="relative" flex={['6', '3']} my="5" className="skills">
        {sortedSkills.map((skill, i) => (
          <Box
            key={skill.name}
            onMouseOver={() => setActiveIndex(i)}
            onMouseOut={() => setActiveIndex(undefined)}
            ref={(el) => {
              if (cardRefs.current && el) {
                cardRefs.current[i] = el;
              }
            }}
          >
            <SkillCard
              name={skill.name}
              description={skill.description}
              date={skill.startDate}
              onClick={() => setExpandedIndex(i === expandedIndex ? undefined : i)}
              expanded={expandedIndex === i}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
