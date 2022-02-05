import { spriteUrlsSvg } from '../constants/sprite-urls';

// Emoji & Sprites
export function getEmojiUrl(set, codepoint) {
  const urlPrefix = spriteUrlsSvg[set].single;
  return `${urlPrefix}/${codepoint}.svg`;
}

export function getCategorySpritesheetUrl(set, category, codepoint) {
  const urlPrefix = spriteUrlsSvg[set].group;
  return `${urlPrefix}/${category}.svg#${codepoint}`;
}

export function getSubcategorySpritesheetUrl(set, subcategory, codepoint) {
  const urlPrefix = spriteUrlsSvg[set].subgroup;
  return `${urlPrefix}/${subcategory}.svg#${codepoint}`;
}

export function getAllEmojiSpritesheetUrl(set) {
  return spriteUrlsSvg[set].all;
}

// Emoji Data
export function getEmojiDataUrl() {
  return 'https://cdn.jsdelivr.net/npm/svgmoji@3.1.0/emoji.json';
}

export function getEmoticonMappingsDataUrl() {
  return 'https://cdn.jsdelivr.net/npm/svgmoji@3.1.0/emoticons.json';
}
