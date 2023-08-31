import * as React from "react";
import { Box, Divider, Text } from "@chakra-ui/react";
import { max, min, orderBy } from "lodash";
import { scaleTime, timeDay, timeMonth, timeYear } from "d3";
import { useTimelineConnectors } from "../hooks/useTimelineConnectors";

function getMinMaxFromData(d: Queries.Timeline2YamlSkills[]) {
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
  skills: Queries.Timeline2YamlSkills[];
};

const colorMap: { [key: string]: string } = {
  HTML: "#68D391",
  CSS: "#4FD1C5",
  "Macromedia Flash": "#F56565",
  Photoshop: "#63B3ED",
  Perl: "#76E4F7",
  JavaScript: "#B794F4",
  MySQL: "#F687B3",
  jQuery: "#FBD38D",
  ".NET": "#ff9900",
  Wordpress: "#38A169",
  Angular: "#A0AEC0",
  React: "#3182CE",
  Typescript: "#D53F8C",
};

export function SkillTimeline({ skills }: Props) {
  const { minDate, maxDate } = getMinMaxFromData(skills);
  const range = [minDate, maxDate];
  const x = scaleTime().domain(range).nice(timeDay);
  const sortedSkills = orderBy(skills, "startDate", "desc");
  const { rootRef, dotRefs, cardRefs } = useTimelineConnectors({
    skills,
  });

  function getSize({
    startDate,
    endDate,
  }: {
    startDate: string | number | null;
    endDate: string | number | null;
  }) {
    const left = (startDate ? x(new Date(startDate)) : 0) * 100;
    const leftEnd = (endDate ? x(new Date(endDate)) : x(Date.now())) * 100;
    const width = leftEnd - left;
    return { left, width };
  }

  function getColor(str: string | null) {
    return str ? colorMap[str] || "#ffffff" : "#ffffff";
  }

  return (
    <Box
      display="flex"
      ref={rootRef}
      mb="5em"
      position="relative"
      flexDir="row"
      sx={{
        ".jtk-connector": {
          opacity: 0.5,
        },
      }}
    >
      <Box position="relative">
        {sortedSkills.map((skill, i) => {
          const { left } = getSize({
            startDate: skill.startDate,
            endDate: skill.endDate,
          });
          return (
            <Box
              ref={(el) => {
                if (dotRefs.current && el) {
                  dotRefs.current[i] = el;
                }
              }}
              sx={{
                position: "absolute",
                left: 0,
                bottom: `${left}%`,
                width: "8px",
                height: "8px",
                background: "currentColor",
                // borderRadius: "50%",
                transform: "translateX(-50%) rotate(45deg)",
              }}
            />
          );
        })}
      </Box>
      <Box flex="1"></Box>
      <Box position="relative" flex="3" className="skills" mr={[4]}>
        {sortedSkills.map((skill, i) => {
          const color = getColor(skill.name);
          return (
            <Box
              position="relative"
              borderLeft={`3px solid ${color}`}
              // background={`linear-gradient(90deg, ${color}33 10%, #ff990000 60%)`}
              background={`${color}33`}
              overflow="hidden"
              textAlign="left"
              mb={1}
              borderRadius={5}
              transition="background .3s"
              sx={{
                "&:hover": {
                  background: `${color}66`,
                },
              }}
              ref={(el) => {
                if (cardRefs.current && el) {
                  cardRefs.current[i] = el;
                }
              }}
            >
              <Box p={2}>
                <Text fontSize="sm" fontWeight="bold" mb="2">
                  {skill.name}
                </Text>
                <Divider />
                <Text fontSize="xs" mt="2">
                  {skill.description}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
