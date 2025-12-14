export interface Video {
    id: string;
    url: string;
    title: string;
}

const BASE_URL = "https://media.golam.dev";

export const VIDEOS: Video[] = [
    { id: '1', url: `${BASE_URL}/Clever Coyote Highlight.mp4`, title: 'Clever Coyote Highlight' },
    { id: '2', url: `${BASE_URL}/Cooking Highlight.mp4`, title: 'Shaad Cuisine Highlight' },
    { id: '3', url: `${BASE_URL}/Free Highlight Reel.mp4`, title: 'Kitab Cafe Highlight' },
    { id: '14', url: `${BASE_URL}/Winter Wardrobes.mp4`, title: 'Winter Wardrobes' },
    { id: '12', url: `${BASE_URL}/Shinola Spec Ad.mp4`, title: 'Shinola Spec Ad' },
    { id: '4', url: `${BASE_URL}/Highlight Reel w Text.mp4`, title: 'Highlight Reel w Text' },
    { id: '5', url: `${BASE_URL}/Interior Showcase.mp4`, title: 'Interior Showcase' },
    { id: '6', url: `${BASE_URL}/Meeting of the Styles.mp4`, title: 'Meeting of the Styles' },
    { id: '7', url: `${BASE_URL}/Metro Highlight.mp4`, title: 'Metro Highlight' },
    { id: '8', url: `${BASE_URL}/New Little India - Buffet.mp4`, title: 'New Little India - Buffet' },
    { id: '9', url: `${BASE_URL}/Rooftop Highlight.mp4`, title: 'Rooftop Highlight' },
    { id: '10', url: `${BASE_URL}/Shaad - Buffet.mp4`, title: 'Shaad - Buffet' },
    { id: '11', url: `${BASE_URL}/Shaad - Interior Highlight.mp4`, title: 'Shaad - Interior Highlight' },
    { id: '13', url: `${BASE_URL}/The Up Room Highlight.mp4`, title: 'The Up Room Highlight' },
];
