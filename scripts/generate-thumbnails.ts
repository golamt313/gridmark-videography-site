
import { VIDEOS } from '../data/videos';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const THUMBNAIL_DIR = path.join(process.cwd(), 'public', 'thumbnails');

if (!fs.existsSync(THUMBNAIL_DIR)) {
    fs.mkdirSync(THUMBNAIL_DIR, { recursive: true });
}

console.log(`Generating thumbnails for ${VIDEOS.length} videos...`);

VIDEOS.forEach((video) => {
    const outputPath = path.join(THUMBNAIL_DIR, `${video.id}.webp`);

    if (fs.existsSync(outputPath)) {
        console.log(`Skipping ${video.title} (already exists)`);
        return;
    }

    console.log(`Processing: ${video.title}...`);
    try {
        const cmd = `ffmpeg -y -i "${video.url}" -ss 00:00:00.100 -vframes 1 -vf scale=720:-1 -q:v 2 "${outputPath}"`;
        execSync(cmd, { stdio: 'ignore' });
        console.log(`Saved: ${video.id}.webp`);
    } catch (error) {
        console.error(`Failed: ${video.title}`, error);
    }
});

console.log('All done!');
