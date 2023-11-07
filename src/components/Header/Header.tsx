import { Box, Container, Flex, Image, useColorMode } from '@chakra-ui/react';
import Logo from '../../logo.svg';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Header = () => {
    const { colorMode } = useColorMode();

    return (
        <Box as="header" paddingY={2} bg={colorMode === 'dark' ? 'gray.600' : 'gray.100'}>
            <Container maxWidth={'container.lg'}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Image src={Logo} alt={'logo'} boxSize={'50px'} objectFit={'cover'} />
                    <ColorModeSwitcher />
                </Flex>
            </Container>
        </Box>
    );
};
