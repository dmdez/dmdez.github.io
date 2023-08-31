import * as React from "react";
import { Box } from "@chakra-ui/react";
import { max, min, orderBy } from "lodash";
import { scaleTime, timeDay } from "d3";
import { useTimelineConnectors } from "../hooks/useTimelineConnectors";
import { SkillCard } from "./SkillCard";

function getMinMaxFromData(d: Queries.TimelineYamlSkills[]) {
  const startDates = d.map(({ startDate }) =>
    startDate ? new Date(startDate).valueOf() : 0
  );
  const endDates = d.map(({ endDate }) =>
    endDate ? new Date(endDate).valueOf() : Date.now().valueOf()
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
  const { minDate, maxDate } = getMinMaxFromData(skills);
  const range = [minDate, maxDate];
  const x = scaleTime().domain(range).nice(timeDay);
  const sortedSkills = orderBy(skills, "startDate", "desc");
  const { rootRef, dotRefs, cardRefs } = useTimelineConnectors({
    skills,
  });

  return (
    <Box
      display="flex"
      ref={rootRef}
      mb="5em"
      position="relative"
      flexDir="row"
      sx={{
        ".connect": {
          opacity: 0.4,
          transition: "all .3s",
        },
        [`.connect-${activeIndex}`]: {
          opacity: 1,
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
            key={i}
            onMouseOver={() => setActiveIndex(i)}
            onMouseOut={() => setActiveIndex(undefined)}
            sx={{
              position: "absolute",
              left: 0,
              bottom: `${
                (skill.startDate ? x(new Date(skill.startDate)) : 0) * 100
              }%`,
              width: "8px",
              height: "8px",
              background: "currentColor",
              transition: "all .3s",
              opacity: activeIndex === i ? 1 : 0.6,
              transform: `translateX(-50%) rotate(45deg) ${
                activeIndex === i ? "scale(1.4)" : ""
              }`,
            }}
          />
        ))}
      </Box>
      <Box flex="1"></Box>
      <Box position="relative" flex={["5", "3"]} className="skills" mr={[4]}>
        {sortedSkills.map((skill, i) => (
          <Box
            key={i}
            onMouseOver={() => setActiveIndex(i)}
            onMouseOut={() => setActiveIndex(undefined)}
            ref={(el) => {
              if (cardRefs.current && el) {
                cardRefs.current[i] = el;
              }
            }}
          >
            <SkillCard name={skill.name} description={skill.description} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
