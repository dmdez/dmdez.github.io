import * as React from "react";
import { Box } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export function MarkerYear() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: "50%",
        height: "100%",
        transform: "translateX(-50%)",
        textAlign: "center",
        zIndex: 10,
      }}
    >
      <Box
        as="a"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.document.body.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        sx={{
          border: "2px solid white",
          borderRadius: "50%",
          display: "block",
          position: "sticky",
          top: "1em",
          zIndex: 10,
          backgroundColor: "secondary.800",
          height: "2.4em",
          width: "2.4em",
          textAlign: "center",
          lineHeight: "1.9em",
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
    </Box>
  );
}
