import * as React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi2";

export function ToggleColor() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: "1em",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderLeft: "1px dotted",
          height: "2em",
        }}
      />
      <Box
        as="button"
        onClick={toggleColorMode}
        sx={{
          fontSize: ["2em", "3em"],
          transform: "rotate(180deg)",
          color: "gray.400",
          _dark: { color: "yellow.100" },
        }}
      >
        {colorMode === "dark" ? <HiLightBulb /> : <HiOutlineLightBulb />}
      </Box>
    </Box>
  );
}
