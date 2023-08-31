import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  name?: string | null;
  description?: string | null;
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

export function SkillCard({ name, description }: Props) {
  const color = name ? colorMap[name] || "#ffffff" : "#ffffff";
  return (
    <Box
      position="relative"
      borderLeft={`3px solid ${color}`}
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
    >
      <Box p={2}>
        <Heading as="h3" fontSize="sm" fontWeight="bold">
          {name}
        </Heading>
        <Text fontSize="xs" mt="2">
          {description}
        </Text>
      </Box>
    </Box>
  );
}
