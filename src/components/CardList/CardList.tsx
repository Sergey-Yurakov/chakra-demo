import { Button, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { PostsProps } from '../../services/getPosts/getPosts';

export type CardListProps = {
    cards?: PostsProps[];
};

export const CardList = (props: CardListProps) => {
    const { cards } = props;

    if (cards && cards.length < 1) {
        return (
            <Flex justifyContent={'center'}>
                <Text fontSize={'2xl'}>Нет постов</Text>
            </Flex>
        );
    }

    // У SimpleGrid идет подход mobile first, по этому брекпоинты ставим от меньшего к большему
    return (
        <SimpleGrid columns={[1, null, 2, 3]} spacing={[4, null, 6]} py={'4'}>
            {cards?.map(card => (
                <Stack
                    key={card.id}
                    spacing={[1, null, 2]}
                    _hover={{ shadow: 'md' }}
                    p={2}
                    justifyContent={'space-between'}
                >
                    <Heading as={'h3'} isTruncated>
                        {card.title[0].toUpperCase() + card.title.slice(1)}
                    </Heading>
                    <Text>{card.body}</Text>
                    <Button
                        as={'a'}
                        // colorScheme={'brand'}
                        variant={'brand'}
                    >
                        Read More
                    </Button>
                </Stack>
            ))}
        </SimpleGrid>
    );
};
