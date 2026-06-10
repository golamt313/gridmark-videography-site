export type Category = 'Retail' | 'Restaurants' | 'Events' | 'Health & Wellness';

export interface Video {
    id: string;
    url: string;
    title: string;
    client: string;
    category: Category;
}

export const VIDEOS: Video[] = [
    {
        id: '16',
        url: 'https://pub-6d029b552aba4795abbdb8e01bca381d.r2.dev/Cambridge%20-%20English%20-%201.mp4',
        title: 'Cambridge English',
        client: 'Livewell with Jessica and Ayman',
        category: 'Health & Wellness'
    },
    {
        id: '17',
        url: 'https://pub-6d029b552aba4795abbdb8e01bca381d.r2.dev/KLOW.mp4',
        title: 'KLOW',
        client: 'Livewell with Jessica and Ayman',
        category: 'Health & Wellness'
    },
    {
        id: '18',
        url: 'https://pub-6d029b552aba4795abbdb8e01bca381d.r2.dev/Livewell%20-%20Fountain%20of%20Youth%20-%201.mp4',
        title: 'Fountain of Youth',
        client: 'Livewell with Jessica and Ayman',
        category: 'Health & Wellness'
    },
    {
        id: '19',
        url: 'https://pub-6d029b552aba4795abbdb8e01bca381d.r2.dev/Livewell%20Peptides%201.mp4',
        title: 'Livewell Peptides',
        client: 'Livewell with Jessica and Ayman',
        category: 'Health & Wellness'
    },
    {
        id: '20',
        url: 'https://pub-6d029b552aba4795abbdb8e01bca381d.r2.dev/NAD%2B.mp4',
        title: 'NAD+',
        client: 'Livewell with Jessica and Ayman',
        category: 'Health & Wellness'
    }
];
