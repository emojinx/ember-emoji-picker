// Search & Filter Utils
export function searchEmojis(searchterm, emojiList) {
  let emojis = emojiList ?? [];

  emojis = emojis.filter(
    (emoji) =>
      emoji.annotation.includes(searchterm) ||
      emoji.tags?.find((tag) => tag.includes(searchterm)) ||
      emoji.shortcodes?.find((shortcode) => shortcode.includes(searchterm))
  );

  return emojis;
}

export function findEmojisBy(key, val, emojiList) {
  const emojis = emojiList ?? [];

  return emojis.filter((emoji) => emoji[key] === val);
}
