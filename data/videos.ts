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
    },
    {
        id: '13',
        url: 'https://media.golam.dev/The Up Room Highlight.mp4',
        title: 'The Up Room Highlight',
        client: 'WearWolfe',
        category: 'Retail'
    },
    {
        id: '14',
        url: 'https://media.golam.dev/Winter Wardrobes.mp4',
        title: 'Winter Wardrobes',
        client: 'Richard Bennett Tailors',
        category: 'Retail'
    },
    {
        id: '3',
        url: 'https://media.golam.dev/Free Highlight Reel.mp4',
        title: 'Kitab Cafe Highlight',
        client: 'Kitab Cafe & Bookstore',
        category: 'Restaurants'
    },
    {
        id: '2',
        url: 'https://media.golam.dev/Cooking Highlight.mp4',
        title: 'Shaad Cuisine Highlight',
        client: 'Shaad Deshi Cuisine',
        category: 'Restaurants'
    },
    {
        id: '12',
        url: 'https://media.golam.dev/Shinola Spec Ad.mp4',
        title: 'Shinola Spec Ad',
        client: 'Shinola Detroit',
        category: 'Retail'
    },
    {
        id: '1',
        url: 'https://media.golam.dev/Clever Coyote Highlight.mp4',
        title: 'Clever Coyote Highlight',
        client: 'WearWolfe',
        category: 'Retail'
    },
    {
        id: '4',
        url: 'https://media.golam.dev/Highlight Reel w Text.mp4',
        title: 'Highlight Reel w Text',
        client: 'WearWolfe',
        category: 'Retail'
    },
    {
        id: '7',
        url: 'https://media.golam.dev/Metro Highlight.mp4',
        title: 'Metro Highlight',
        client: 'WearWolfe',
        category: 'Retail'
    },
    {
        id: '9',
        url: 'https://media.golam.dev/Rooftop Highlight.mp4',
        title: 'Rooftop Highlight',
        client: 'WearWolfe',
        category: 'Retail'
    },
    {
        id: '10',
        url: 'https://media.golam.dev/Shaad - Buffet.mp4',
        title: 'Shaad - Buffet',
        client: 'Shaad Deshi Cuisine',
        category: 'Restaurants'
    },
    {
        id: '11',
        url: 'https://media.golam.dev/Shaad - Interior Highlight.mp4',
        title: 'Shaad - Interior Highlight',
        client: 'Shaad Deshi Cuisine',
        category: 'Restaurants'
    },
    {
        id: '5',
        url: 'https://media.golam.dev/Interior Showcase.mp4',
        title: 'Interior Showcase',
        client: 'New Little India',
        category: 'Restaurants'
    },
    {
        id: '8',
        url: 'https://media.golam.dev/New Little India - Buffet.mp4',
        title: 'New Little India - Buffet',
        client: 'New Little India',
        category: 'Restaurants'
    },
    {
        id: '6',
        url: 'https://media.golam.dev/Meeting of the Styles.mp4',
        title: 'Meeting of the Styles',
        client: 'Meeting of the Styles',
        category: 'Events'
    },
    {
        id: '15',
        url: 'https://media.golam.dev/The Underline Market Event.mp4',
        title: 'The Underline Market Event',
        client: 'The Underline Market',
        category: 'Events'
    }
];
