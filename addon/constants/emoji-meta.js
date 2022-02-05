import { categorySvgs } from './inline-svg';

export const categories = {
  'smileys-emotion': {
    id: 'smileys-emotion',
    name: 'Smileys & Emotion',
    icon: categorySvgs['smileys-emotion'],
  },
  'people-body': {
    id: 'people-body',
    name: 'People & Body',
    icon: categorySvgs['people-body'],
  },
  'hair-color': {
    id: 'hair-color',
    name: 'Hair Colors',
    icon: '',
  },
  'animals-nature': {
    id: 'animals-nature',
    name: 'Animals & Nature',
    icon: categorySvgs['animals-nature'],
  },
  'food-drink': {
    id: 'food-drink',
    name: 'Food & Drink',
    icon: categorySvgs['food-drink'],
  },
  'travel-places': {
    id: 'travel-places',
    name: 'Travel & Places',
    icon: categorySvgs['travel-places'],
  },
  activities: {
    id: 'activities',
    name: 'Activities',
    icon: categorySvgs['activities'],
  },
  objects: {
    id: 'objects',
    name: 'Objects',
    icon: categorySvgs['objects'],
  },
  symbols: {
    id: 'symbols',
    name: 'Symbols',
    icon: categorySvgs['symbols'],
  },
  flags: {
    id: 'flags',
    name: 'Flags',
    icon: categorySvgs['flags'],
  },
  search: {
    id: 'search',
    name: 'Search Results',
    icon: categorySvgs['search'],
  },
  recents: {
    id: 'recents',
    name: 'Frequently Used',
    icon: categorySvgs['recents'],
  },
  custom: {
    id: 'custom',
    name: 'Custom',
    icon: '',
  },
};

export const skin_tones = {
  '1F3FA': {
    id: '1F3FA',
    index: 0,
    name: 'Default Skin Tone',
    color: '',
  },
  '1F3FB': {
    id: '1F3FB',
    index: 1,
    name: 'Light Skin Tone',
    color: '#fadcbc',
  },
  '1F3FC': {
    id: '1F3FC',
    index: 2,
    name: 'Medium-Light Skin Tone',
    color: '#debb90',
  },
  '1F3FD': {
    id: '1F3FD',
    index: 3,
    name: 'Medium Skin Tone',
    color: '#c19a65',
  },
  '1F3FE': {
    id: '1F3FE',
    index: 4,
    name: 'Medium-Dark Skin Tone',
    color: '#a57939',
  },
  '1F3FF': {
    id: '1F3FF',
    index: 5,
    name: 'Dark Skin Tone',
    color: '#6a462f',
  },
};

export const EmojiListTypes = {
  SEARCH_RESULT: 'search_results',
  RECENT_EMOJIS: 'recents',
  CUSTOM_EMOJIS: 'custom_emojis',
  DEFAULT: 'default',
};

export const defaults = {
  iconSet: 'twitter',
  emoji: {
    iconSize: [20, 20],
    allowedCategories: [],
    disallowedCategories: [],
    emojisTillVersion: 13,
  },
  cssOverrides: {},
  i18nOverrides: {
    categories: {},
  },
  iconSetOverrides: {
    categories: [],
    skinPickerImg: '',
  },
};
