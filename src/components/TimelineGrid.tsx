import * as React from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  ticks: Date[];
};

export function TimelineGrid({ ticks }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDir: "row",
        width: "100%",
        justifyContent: "space-between",
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {ticks.map((value, i) => (
        <Box
          key={i}
          sx={{
            width: "1px",
            background: "#eee",
            height: "100%",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: 5,
              fontSize: 9,
              whiteSpace: "nowrap",
            }}
          >
            {value.getFullYear()}
          </span>
        </Box>
      ))}
    </Box>
  );
}
