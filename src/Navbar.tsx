import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  useDisclosure,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.100', 'gray.900')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        justify={'space-between'}>
        
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={onToggle}
        />

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Sports Analytics
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  const NAV_ITEMS = [
    { label: 'Home', href: '#' },
    { label: 'NBA', href: '#' },
    { label: 'NFL', href: '#' },
    { label: 'NHL', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Link
          key={navItem.label}
          href={navItem.href}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}>
          {navItem.label}
        </Link>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {DesktopNav().props.children}
    </Stack>
  );
};

export default Navbar;