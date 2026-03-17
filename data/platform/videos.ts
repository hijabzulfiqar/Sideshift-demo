import { videosByCategory } from "@/data/creators";

type ShowcaseVideo = { src: string; platform: string };

/**
 * Platform video asset map.
 * TikTok: 52 videos, Instagram: 22, YouTube: 0, Facebook: 0
 *
 * Videos sourced from Wistia CDN (already uploaded).
 * YouTube/Facebook pages use creator profile cards instead (0 videos).
 */

// Flatten all category videos into a single pool
const allVideos = Object.values(videosByCategory).flat();

// TikTok gets 52 videos — cycle through all categories
export const tiktokVideos: ShowcaseVideo[] = allVideos
  .slice(0, 52)
  .map((src, i) => ({
    src,
    platform: "TikTok",
  }));

// Instagram gets 22 videos — first 22 from the pool
export const instagramVideos: ShowcaseVideo[] = allVideos
  .slice(0, 22)
  .map((src) => ({
    src,
    platform: "Instagram",
  }));

// YouTube & Facebook: empty — pages will use creator profile cards
export const youtubeVideos: ShowcaseVideo[] = [];
export const facebookVideos: ShowcaseVideo[] = [];
