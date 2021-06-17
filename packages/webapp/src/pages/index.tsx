import { Box } from "@chakra-ui/react";
import Features from "components/Home/Features";
import Landing from "components/Home/Landing";
import useLandingSize from "hooks/landing-size";

export default function () {
  const landingSize = useLandingSize();

  return (
    <>
      <Landing size={landingSize} />
      <Features />
      <Box h="1000px" />
    </>
  );
}
