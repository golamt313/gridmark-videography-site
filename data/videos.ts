export type Category = 'Retail' | 'Restaurants' | 'Events';

export interface Video {
    id: string;
    url: string;
    title: string;
    client: string;
    category: Category;
}

const BASE_URL = "https://media.golam.dev";

export const VIDEOS: Video[] = [
    // 1. Up Room (Retail) - Moved to first
    {
        id: '13',
        url: `${BASE_URL}/The Up Room Highlight.mp4`,
        title: 'The Up Room Highlight',
        client: 'WearWolfe',
        category: 'Retail'
    },
    // 2. Winter Wardrobes (Retail) - Richard Bennett Tailors
    {
        id: '14',
        url: `${BASE_URL}/Winter Wardrobes.mp4`,
        title: 'Winter Wardrobes',
        client: 'Richard Bennett Tailors',
        category: 'Retail'
    },
    // 3. Kitab Cafe (Restaurants)
    {
        id: '3',
        url: `${BASE_URL}/Free Highlight Reel.mp4`,
        title: 'Kitab Cafe Highlight',
        client: 'Kitab Cafe & Bookstore',
        category: 'Restaurants'
    },
    // 4. Shaad Cuisine (Restaurants)
    {
        id: '2',
        url: `${BASE_URL}/Cooking Highlight.mp4`,
        title: 'Shaad Cuisine Highlight',
        client: 'Shaad Deshi Cuisine',
        category: 'Restaurants'
    },
    // 5. Shinola (Retail)
    {
        id: '12',
        url: `${BASE_URL}/Shinola Spec Ad.mp4`,
        title: 'Shinola Spec Ad',
        client: 'Shinola Detroit',
        category: 'Retail'
    },
    // 6. Clever Coyote (Retail) - WearWolfe
    {
        id: '1',
        url: `${BASE_URL}/Clever Coyote Highlight.mp4`,
        title: 'Clever Coyote Highlight',
        client: 'WearWolfe',
        category: 'Retail'
    },
    // 7. Highlight Reel w Text (Retail) - WearWolfe
    {
        id: '4',
        url: `${BASE_URL}/Highlight Reel w Text.mp4`,
        title: 'Highlight Reel w Text',
        client: 'WearWolfe',
        category: 'Retail'
    },
    // 8. Metro Highlight (Retail) - WearWolfe
    {
        id: '7',
        url: `${BASE_URL}/Metro Highlight.mp4`,
        title: 'Metro Highlight',
        client: 'WearWolfe',
        category: 'Retail'
    },
    // 9. Rooftop Highlight (Retail) - WearWolfe
    {
        id: '9',
        url: `${BASE_URL}/Rooftop Highlight.mp4`,
        title: 'Rooftop Highlight',
        client: 'WearWolfe',
        category: 'Retail'
    },
    // 10. Shaad Buffet (Restaurants)
    {
        id: '10',
        url: `${BASE_URL}/Shaad - Buffet.mp4`,
        title: 'Shaad - Buffet',
        client: 'Shaad Deshi Cuisine',
        category: 'Restaurants'
    },
    // 11. Shaad Interior (Restaurants)
    {
        id: '11',
        url: `${BASE_URL}/Shaad - Interior Highlight.mp4`,
        title: 'Shaad - Interior Highlight',
        client: 'Shaad Deshi Cuisine',
        category: 'Restaurants'
    },
    // 12. Interior Showcase (Restaurants) - New Little India
    {
        id: '5',
        url: `${BASE_URL}/Interior Showcase.mp4`,
        title: 'Interior Showcase',
        client: 'New Little India',
        category: 'Restaurants'
    },
    // 13. New Little India Buffet (Restaurants)
    {
        id: '8',
        url: `${BASE_URL}/New Little India - Buffet.mp4`,
        title: 'New Little India - Buffet',
        client: 'New Little India',
        category: 'Restaurants'
    },
    // 14. Meeting of the Styles (Events)
    {
        id: '6',
        url: `${BASE_URL}/Meeting of the Styles.mp4`,
        title: 'Meeting of the Styles',
        client: 'Meeting of the Styles',
        category: 'Events'
    },
    // 15. The Underline Market Event (Events) - NEW
    {
        id: '15',
        url: `${BASE_URL}/The Underline Market Event.mp4`,
        title: 'The Underline Market Event',
        client: 'The Underline Market',
        category: 'Events'
    }
];
