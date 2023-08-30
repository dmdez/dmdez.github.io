import * as React from "react";
import type { HeadFC } from "gatsby";
import {
  Box,
  useColorMode,
  Container,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { Timeline } from "../components/Timeline";
import { Timeline2 } from "../components/Timeline2";
import { ToggleColor } from "../components/ToggleColor";

const IndexPage: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box as="main">
      <Container maxW="container.lg" position="relative">
        <Box
          py={[10, 20]}
          textAlign="center"
          bgGradient="radial(#ffffff11 0%, #ffffff00 60%)"
        >
          <Heading
            size={["2xl", "4xl"]}
            sx={{
              textShadow: "10px 10px 4px rgba(0,0,0,.25)",
              _dark: { textShadow: "10px 10px 4px black" },
            }}
          >
            deric mendez
          </Heading>
        </Box>
        <ToggleColor />
      </Container>
      <Divider />
      <Timeline2 />
      {/* 
      <Box
        sx={{
          position: "relative",
          overflow: "auto",
          height: "50vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: ["400%", "200%", "100%"],
          }}
          mb={4}
        >
          <Timeline />
        </Box>
      </Box> */}
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
