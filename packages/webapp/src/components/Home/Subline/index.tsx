import { Box, Text, useStyleConfig } from "@chakra-ui/react";
import React from "react";

export interface SublineProps {
  size: "sm" | "md" | "lg";
}

export default function ({ size }: SublineProps) {
  const styles = useStyleConfig("HomeSubline", { size });

  return (
    <Box __css={styles}>
      <Box>
        Community driven content, in-depth{" "}
        <Box as="span" color="primary">
          tutorials
        </Box>
      </Box>
      <Text>
        quick{" "}
        <Box as="span" color="primary">
          {" "}
          tips{" "}
        </Box>{" "}
        and fortnightly{" "}
        <Box as="span" color="primary">
          newsletter
        </Box>
      </Text>
    </Box>
  );
}
