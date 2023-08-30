import * as React from "react";
import { Box, Text, Tooltip } from "@chakra-ui/react";
import { max, min, orderBy } from "lodash";
import { scaleTime, timeDay, timeMonth, timeYear } from "d3";
import { InfoOutlineIcon } from "@chakra-ui/icons";

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

const colorMap = {
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

  return (
    <Box>
      <Box
        position="relative"
        display="flex"
        flexDir="row"
        height="50vh"
        alignItems="flex-end"
      >
        {orderBy(skills, "startDate", "desc").map((skill) => {
          const { left, width } = getSize({
            startDate: skill.startDate,
            endDate: skill.endDate,
          });
          const color = skill.name
            ? colorMap[skill.name] || "#ffffff"
            : "#ffffff";
          return (
            <Tooltip label={skill.description}>
              <Box
                as="button"
                position="relative"
                flexGrow={1}
                flexBasis={0}
                height={`${width}%`}
                //   marginBottom={`${left}%`}
                borderLeft={`1px solid ${color}`}
                background={`linear-gradient(90deg, ${color}33 10%, #ff990000 60%)`}
                bottom={`${left}%`}
                overflow="hidden"
                textAlign="left"
              >
                <Box p={1}>
                  <Text fontSize={12}>{skill.name}</Text>
                  <InfoOutlineIcon />
                </Box>
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box position="relative">
        {orderBy(skills, "startDate", "desc").map((skill) => {
          const { left, width } = getSize({
            startDate: skill.startDate,
            endDate: skill.endDate,
          });
          return (
            <Box position="relative" mb={1}>
              <Box
                sx={{
                  marginLeft: `${left}%`,
                  width: `${width}%`,
                  borderTop: "12px solid blue",
                  fontSize: 12,
                }}
              >
                {skill.name}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
