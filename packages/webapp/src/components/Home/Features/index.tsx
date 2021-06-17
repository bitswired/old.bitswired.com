import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaChalkboard, FaEnvelope, FaUsers } from "react-icons/fa";
import FeatureCard from "../FeatureCard";

export default function Features() {
  const variant = useBreakpointValue({ base: "outline", md: "solid" });

  console.log(variant);

  return (
    <Flex direction={["column", "column", "row"]} justify="space-evenly" p={16}>
      <Fade duration={1000} direction="left" triggerOnce>
        <FeatureCard title="Spreading Knowledge" icon={<FaChalkboard />}>
          As a machine learning engineer, I will share computer science
          knowledge, and real-life work stories. We learn together.
        </FeatureCard>
      </Fade>

      <Fade duration={1000} fraction={0.5} triggerOnce>
        <FeatureCard title="Community Driven" icon={<FaUsers />}>
          We will regularly ask the community to vote for the next topics. You
          have direct impact on the content.
        </FeatureCard>
      </Fade>

      <Fade duration={1000} direction="right" triggerOnce>
        <FeatureCard title="Newsletter" icon={<FaEnvelope />}>
          <>
            We will share new content from Bits Wired and other websites,
            interesting papers and resources.
            <Box as="span" onClick={open} color="primary" cursor="pointer">
              {" "}
              Subscribe!
            </Box>
          </>
        </FeatureCard>
      </Fade>
    </Flex>
  );
}

{
  /* <Fade duration={1000} direction="left" triggerOnce>
  <FeatureCard title="Spreading Knowledge" icon={<FaChalkboard />}>
    As a machine learning engineer, I will share computer science
    knowledge, and real-life work stories. We learn together.
  </FeatureCard>
</Fade>

<Fade duration={1000} fraction={0.5} triggerOnce>
  <FeatureCard title="Community Driven" icon={<FaUsers />}>
    We will regularly ask the community to vote for the next topics.
    You have direct impact on the content.
  </FeatureCard>
</Fade>

<Fade duration={1000} direction="right" triggerOnce>
  <FeatureCard title="Newsletter" icon={<FaEnvelope />}>
    We will share new content from Bits Wired and other websites,
    interesting papers and resources.
    <Box as="span" onClick={open} color="primary" cursor="pointer">
      {" "}
      Subscribe!
    </Box>
  </FeatureCard>
</Fade> */
}
