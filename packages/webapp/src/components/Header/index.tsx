import { Box, Flex, Spacer } from '@chakra-ui/react';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import NavigationSlider from 'components/NavigationSlider';
import { FaBars } from 'react-icons/fa';

interface MenuIconResponsiveWrapperProps {
  onSliderOpen: () => void;
}

function MenuIconResponsiveWrapper({ onSliderOpen }: MenuIconResponsiveWrapperProps) {
  return (
    <Box display={['block', 'block', 'none']} cursor="pointer" onClick={onSliderOpen}>
      <FaBars />
    </Box>
  );
}

function NavigationResponsiveWrapper() {
  return (
    <Box display={['none', 'none', 'flex']}>
      <Navigation />
    </Box>
  );
}

export interface HeaderProps {
  isSliderOpen: boolean;
  onSliderOpen: () => void;
  onSliderClose: () => void;
}

export default function Header({
  isSliderOpen,
  onSliderOpen,
  onSliderClose
}: HeaderProps): JSX.Element {
  return (
    <>
      <Flex
        position="fixed"
        zIndex={1000}
        w="100%"
        h="75px"
        top={0}
        left={0}
        bgColor="black"
        color="white"
        justify="space-between"
        align="center"
        px={8}
        bg="black"
        transition="color 0.5s, top 0.5s">
        <Logo /> <Spacer /> <NavigationResponsiveWrapper /> <Spacer />
        <MenuIconResponsiveWrapper onSliderOpen={onSliderOpen} />
      </Flex>
      <NavigationSlider isOpen={isSliderOpen} onSliderClose={onSliderClose} />
    </>
  );
}
