import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import { spriteUrlsPng } from '../constants/asset-urls';

// const SHEET_SIZE = 64;

function getSpriteUrlPng(iconset) {
  return spriteUrlsPng[iconset].url;
}

function getSheetRowsCols(iconset) {
  return {
    rows: spriteUrlsPng[iconset].rows,
    cols: spriteUrlsPng[iconset].cols,
  };
}

function calculateBgPostion(iconset, emoji) {
  const sheet = emoji.sheets && emoji.sheets[iconset];
  if (!sheet) return { bgPosition: null };

  const { sheet_x, sheet_y } = emoji.sheets && emoji.sheets[iconset],
    { rows, cols } = getSheetRowsCols(iconset),
    multiplyX = 100 / (cols - 1),
    multiplyY = 100 / (rows - 1);

  return {
    bgSize: `${rows * 100}% ${cols * 100}%`,
    bgPosition: `${multiplyX * sheet_x}% ${multiplyY * sheet_y}%`,
  };
}

const DISPLAY_NONE_STYLE = htmlSafe('display: none;');

/**
 * Template helper function to calculate inline style attributes for emojis
 */
function emojiStyle([iconset, emoji, validateFn]) {
  if (!validateFn(emoji)) {
    return DISPLAY_NONE_STYLE;
  }

  const bgUrl = getSpriteUrlPng(iconset);
  if (!bgUrl) {
    return DISPLAY_NONE_STYLE;
  }
  const bg_url_style = `background-image: url(${bgUrl});`;

  const { bgSize, bgPosition } = calculateBgPostion(iconset, emoji);
  if (!bgPosition) {
    return DISPLAY_NONE_STYLE;
  }
  const bg_size_style = `background-size: ${bgSize};`;
  const bg_position_style = `background-position: ${bgPosition};`;

  const style = `
    ${bg_url_style}
    ${bg_size_style}
    ${bg_position_style}
  `;

  return htmlSafe(style);
}

export default helper(emojiStyle);
