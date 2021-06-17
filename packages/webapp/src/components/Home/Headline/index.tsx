import { Box, Text, useStyleConfig } from "@chakra-ui/react";
import React from "react";

export interface HeadlineProps {
  size: "sm" | "md" | "lg";
}

export default function ({ size }: HeadlineProps) {
  const styles = useStyleConfig("HomeHeadline", { size });

  return (
    <Box __css={styles}>
      <Text>
        Spreading{" "}
        <Box as="span" fontWeight="bolder">
          Tech Knowledge
        </Box>
      </Text>
      <Text>from Programing</Text>
      <Text>
        up to{" "}
        <Box as="span" fontWeight="bolder">
          Machine Learning
        </Box>
      </Text>
    </Box>
  );
}
