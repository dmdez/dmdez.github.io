import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { orderBy } from "lodash";
import { Marker } from "./Marker";
import { SkillTimeline } from "./SkillTimeline";

export function Timeline() {
  const timeline = useStaticQuery<Queries.TimelineQuery>(graphql`
    query Timeline {
      allTimelineYaml {
        nodes {
          id
          name
          date
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
      pt={20}
      sx={{
        "& section:nth-of-type(even)": {
          transform: [null, "rotateY(180deg)"],
          "& .skills,.jobDescription,.marker": {
            transform: [null, "rotateY(180deg)"],
          },
        },
      }}
    >
      {orderBy(data, "date", "desc").map(({ name, date, skills }, i) => {
        return (
          <Box key={i} as="section" maxW="container.lg" pt="5" margin="0 auto">
            <HStack
              flexDir={["column", "row-reverse"]}
              spacing="0"
              alignItems="flex-start"
              className="jobSection"
            >
              <Box flexGrow={1} flexBasis={0} overflow="hidden" flex={1}>
                {name && (
                  <SkillTimeline
                    skills={(skills || []).map((skill) => ({
                      description: skill?.description || "",
                      endDate: skill?.endDate || "",
                      name: skill?.name || "",
                      startDate: skill?.startDate || "",
                    }))}
                  />
                )}
              </Box>
              <Box
                flexGrow={1}
                flexBasis={0}
                textAlign="center"
                className="jobDescription"
              >
                <Box p="5">
                  <Heading size="xl" mb="3">
                    {name}
                  </Heading>
                  <Text fontSize="small" fontWeight="light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam varius metus nisi, vitae tristique urna porta vitae.
                    Morbi in blandit ipsum, at dictum dolor. Pellentesque
                    faucibus tristique elit. Sed rhoncus iaculis diam sed
                    malesuada. Sed vitae pellentesque ante. Aliquam egestas
                    porta purus et rutrum. Vestibulum dictum purus tortor.{" "}
                  </Text>
                </Box>
              </Box>
            </HStack>
            <Box textAlign="center" className="marker">
              <Marker>{date && new Date(date).getFullYear()}</Marker>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
