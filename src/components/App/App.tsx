import { useEffect, useState } from 'react';
import {
    Box,
    ChakraProvider,
    CircularProgress,
    Container,
    Divider,
    extendTheme,
    Flex,
    Heading,
    Text,
} from '@chakra-ui/react';
import { Header } from '../Header/Header';
import { CardList } from '../CardList/CardList';
import { getPosts, PostsProps } from '../../services/getPosts/getPosts';

export const App = () => {
    const theme = extendTheme({
        colors: {
            brand: {
                100: 'red',
                200: 'red',
                300: 'red',
                400: 'red',
                500: 'brown',
                600: 'brown',
                700: 'brown',
            },
        },
        components: {
            Button: {
                variants: {
                    brand: (props: { colorMode: string }) => ({
                        bg: props.colorMode === 'dark' ? 'brand.300' : 'brand.700',
                        color: 'white',
                        _hover: {
                            bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.300',
                        },
                    }),
                },
            },
        },
    });

    const [posts, setPosts] = useState<PostsProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await getPosts();
                setPosts([...posts, ...result]);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <ChakraProvider theme={theme} resetCSS>
            <Header />
            <Container maxWidth={'container.lg'}>
                <Box paddingY={2}>
                    <Heading size={'2xl'}>Chakra UI Demo Page</Heading>
                    <Text fontSize={'xl'}>Hello from Chakra UI Component</Text>
                </Box>
                <Divider />
                {isLoading ? (
                    <Flex paddingY={5} justifyContent={'center'}>
                        <CircularProgress isIndeterminate color="green.300" />
                    </Flex>
                ) : (
                    <CardList cards={posts} />
                )}
                {error ? (
                    <Flex justifyContent={'center'}>
                        <Text fontSize={'2xl'} color={'red.300'}>
                            Возникла ошибка при загрузке постов
                        </Text>
                    </Flex>
                ) : null}
            </Container>
        </ChakraProvider>
    );
};
