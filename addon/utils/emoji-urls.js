import { emojiList, emojiWebpSprites, emojiListUrls, groupedEmojiList } from '../constants/asset-urls';

export function getWebpSpriteUrl(iconSet) {
  return emojiWebpSprites[iconSet];
}

export function getGroupedEmojiListUrl() {
  return groupedEmojiList;
}

export function getUrlForEmojiList() {
  return emojiList;
}

export function fetchEmojiListBy(property) {
  return emojiListUrls[property] ?? '';
}
