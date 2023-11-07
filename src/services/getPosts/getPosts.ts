import axios from 'axios';

export type PostsProps = {
    id: number;
    title: string;
    body: string;
};

export const getPosts = async () => {
    try {
        const response = await axios.get<PostsProps[]>(
            'https://jsonplaceholder.typicode.com/posts',
            {
                params: {
                    _limit: 20,
                },
            }
        );
        const { data } = await response;
        return data;
    } catch (error) {
        console.error('Возникла ошибка при получении постов' + error);
        throw error;
    }
};
