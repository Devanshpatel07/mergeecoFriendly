export const INSTAGRAM_HANDLE = process.env.NEXT_PUBLIC_INSTAGRAM || 'mergeecofriendlypvtltd';

export function getInstagramDmUrl(): string {
  // Direct Instagram DM link with app scheme fallback
  return `https://ig.me/m/${INSTAGRAM_HANDLE}`;
}

export function getInstagramProfileUrl(): string {
  return `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
}

export function getYouTubeUrl(): string {
  return `https://www.youtube.com/@MergeEcoFriendlyPvtLtd`;
}
