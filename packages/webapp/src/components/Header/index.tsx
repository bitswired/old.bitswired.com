import { Box, Flex, Spacer } from "@chakra-ui/react";
import Logo from "components/Logo";
import Navigation from "components/Navigation";
import NavigationSlider from "components/NavigationSlider";
import { FaBars } from "react-icons/fa";

interface MenuIconResponsiveWrapperProps {
  onSliderOpen: () => void;
}

function MenuIconResponsiveWrapper({
  onSliderOpen,
}: MenuIconResponsiveWrapperProps) {
  return (
    <Box
      display={["block", "none", "none"]}
      cursor="pointer"
      onClick={onSliderOpen}
    >
      <FaBars />
    </Box>
  );
}

function NavigationResponsiveWrapper() {
  return (
    <Box display={["none", "none", "flex"]}>
      <Navigation />
    </Box>
  );
}

export interface HeaderProps {
  isGoingDown: boolean;
  lock: boolean;
  isSliderOpen: boolean;
  onSliderOpen: () => void;
  onSliderClose: () => void;
}

export default function Header({
  isGoingDown,
  lock,
  isSliderOpen,
  onSliderOpen,
  onSliderClose,
}: HeaderProps) {
  return (
    <>
      <Flex
        zIndex={1000}
        w="100%"
        h="75px"
        position="fixed"
        left={0}
        top={isGoingDown ? -100 : 0}
        bgColor="black"
        color="white"
        justify="space-between"
        align="center"
        px={8}
        bg={lock ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)"}
        style={{
          backdropFilter: lock ? "blur(10px) saturate(180%)" : "none",
          WebkitBackdropFilter: lock ? "blur(10px) saturate(180%)" : "none",
        }}
        transition="color 0.5s, top 0.5s"
        shadow={lock ? "dark-lg" : "none"}
      >
        <Logo /> <Spacer /> <NavigationResponsiveWrapper /> <Spacer />
        <MenuIconResponsiveWrapper onSliderOpen={onSliderOpen} />
      </Flex>
      <NavigationSlider isOpen={isSliderOpen} onSliderClose={onSliderClose} />
    </>
  );
}
