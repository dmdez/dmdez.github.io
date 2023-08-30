import * as React from "react";
import { Box, keyframes } from "@chakra-ui/react";

const pulseRing = keyframes`  
0% {
    transform: scale(.10);
  }
  60%, 100% {
    opacity: 0;
  }
`;

type Props = {
  children?: React.ReactNode;
};
export function Marker({ children }: Props) {
  return (
    <Box
      sx={{
        position: "absolute",
        display: "inline-block",
        marginTop: "-3em",
      }}
    >
      <Box
        sx={{
          width: "4em",
          height: "4em",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mb: 4,
          zIndex: 1,
          position: "absolute",
          top: "-2em",
          left: "-2em",
          _before: {
            content: '""',
            position: "absolute",
            display: "block",
            width: "250%",
            height: "250%",
            boxSizing: "border-box",
            marginLeft: "-75%",
            borderRadius: "50%",
            backgroundColor: "primary.800",
            animation: `${pulseRing} 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite`,
            filter: "blur(.4rem)",
            // animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          },
          _after: {
            content: '""',
            position: "absolute",
            display: "block",
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            backgroundColor: "primary.700",
            borderRadius: "50% 50% 0 50%",
            transform: "rotate(45deg)",
            border: "3px solid #fff",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }} color="white">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
