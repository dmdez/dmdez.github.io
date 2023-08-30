import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { orderBy } from "lodash";
import { Marker } from "./Marker";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { SkillTimeline } from "./SkillTimeline";

export function Timeline2() {
  const timeline = useStaticQuery<Queries.Timeline2Query>(graphql`
    query Timeline2 {
      allTimeline2Yaml {
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
  const data = timeline.allTimeline2Yaml.nodes;

  return (
    <Box position="relative" pt={20}>
      {orderBy(data, "date", "desc").map(({ name, date, skills }, i) => {
        return (
          <>
            <Container maxW="container.lg">
              <HStack
                // width={["100%", "100%", "50%"]}
                // marginLeft={[0, 0, i % 2 === 0 ? "0" : "50%"]}
                flexDir={["column", i % 2 === 0 ? "row-reverse" : "row"]}
                spacing="2px"
              >
                <Box flexGrow={1} flexBasis={0} overflow="hidden" flex={1}>
                  <SkillTimeline skills={skills || []} />
                </Box>
                <Box flexGrow={1} flexBasis={0} textAlign="center">
                  <Heading size="xl">{name}</Heading>
                </Box>
              </HStack>
              <Box textAlign="center">
                <Marker>{date && new Date(date).getFullYear()}</Marker>
              </Box>
            </Container>
            <Divider />
          </>
        );
      })}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          height: "100%",
          transform: "translateX(-50%)",
          // display: ["none", "none", "block"],
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            borderLeft: "1px dashed",
            height: "calc(100% - 4em)",
            position: "absolute",
            left: "50%",
            opacity: 0.5,
            bottom: 0,
          }}
        />
        <Box
          as="a"
          href="#"
          sx={{
            border: "2px solid white",
            borderRadius: "50%",
            display: "block",
            position: "sticky",
            top: "1em",
            zIndex: 10,
            backgroundColor: "primary.800",
            height: "2.4em",
            width: "2.4em",
            textAlign: "center",
            lineHeight: "2.2em",
            boxShadow: "0 0 10px #00000055",
          }}
        >
          <ArrowUpIcon
            sx={{
              fontSize: "2em",
              color: "white",
            }}
          />
        </Box>
        <Box>{new Date().getFullYear()}</Box>
      </Box>{" "}
    </Box>
  );
}
