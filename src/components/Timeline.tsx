import * as React from "react";
import { Box, Button, Tooltip } from "@chakra-ui/react";
import { max, min } from "d3-array";
import { scaleTime } from "d3-scale";
import { groupBy, orderBy, sortBy } from "lodash";
import { TimelineGrid } from "./TimelineGrid";
import { useTimelineData } from "../hooks/useTimelineData";

function getMinMaxFromData(
  d: Queries.TimelineQuery["allTimelineYaml"]["nodes"]
) {
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

export function Timeline() {
  const {
    setFilterWorkplace,
    groupedByWorkplace,
    getSize,
    ticks,
    groupedTimeline,
    filterWorkplace,
  } = useTimelineData();

  return (
    <Box display="flex" flexDir="column" height="100%">
      {filterWorkplace && (
        <Box sx={{ zIndex: 10 }}>
          <Button onClick={() => setFilterWorkplace(undefined)}>back</Button>
        </Box>
      )}
      <TimelineGrid ticks={ticks} />
      <Box sx={{ position: "relative" }} mb={2} mt={6} height="30px">
        {Object.keys(groupedByWorkplace).map((name, i) => {
          const { minDate, maxDate } = getMinMaxFromData(
            groupedByWorkplace[name]
          );
          const { left, width } = getSize({
            startDate: minDate,
            endDate: maxDate,
          });
          return (
            <Box
              sx={{
                top: 0,
                position: "absolute",
                left: `${left}%`,
                width: `${width}%`,
                borderTop: "1px solid #eee",
                transition: ".3s all",
                borderRadius: "5px",
                bottom: 0,
              }}
            >
              <Box
                sx={{
                  fontSize: 10,
                }}
                onClick={() => setFilterWorkplace(name)}
              >
                {name}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box
        display="grid"
        gridAutoRows="1fr"
        gridAutoFlow="row"
        height="100%"
        gap={2}
      >
        {Object.keys(groupedTimeline).map((name, i) => (
          <Box sx={{ position: "relative" }}>
            {groupedTimeline[name].map(
              ({ startDate, endDate, id, description }) => {
                const { left, width } = getSize({ startDate, endDate });
                return (
                  <Tooltip label={description}>
                    <Box
                      key={id}
                      sx={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: `${left}%`,
                        width: `${width}%`,
                        background: "pink",
                        // outline: "1px solid white",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        transition: ".3s all",
                        opacity: 0.8,
                        display: "flex",
                        fontSize: 12,
                        _dark: { background: "purple.400" },
                      }}
                    >
                      {name}
                    </Box>
                  </Tooltip>
                );
              }
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
