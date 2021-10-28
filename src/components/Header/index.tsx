import { Box, Flex, Spacer } from '@chakra-ui/react';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
// import NavigationSlider from 'components/NavigationSlider';
import dynamic from 'next/dynamic';
import { FaBars } from 'react-icons/fa';

const DynamicNavigationSlider = dynamic(() => import('components/NavigationSlider'), {
  ssr: false
});

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
        color="white"
        justify="space-between"
        align="center"
        shadow="2xl"
        px={8}
        bg="black"
        transition="color 0.5s, top 0.5s"
      >
        <Logo /> <Spacer /> <NavigationResponsiveWrapper /> <Spacer />
        <MenuIconResponsiveWrapper onSliderOpen={onSliderOpen} />
      </Flex>
      <DynamicNavigationSlider isOpen={isSliderOpen} onSliderClose={onSliderClose} />
    </>
  );
}
