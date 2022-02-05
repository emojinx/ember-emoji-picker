import { A } from '@ember/array';
import { action } from '@ember/object';
import { bind, debounce } from '@ember/runloop';
import { inject as service } from '@ember/service';
import { isEmpty, isPresent } from '@ember/utils';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {
  categories,
  EmojiListTypes,
  skin_tones,
} from '../constants/emoji-meta';
import { searchEmojis as searchEmojisUtil } from '../utils/emoji-utils';

const initialValues = {
  activeCategory: 'smileys-emotion',
  activeSkinTone: '1F3FA',
  iconSet: 'twitter',
  iconSize: 24,
  categoryIconSize: 24,
};

export default class EmojiPickerComponent extends Component {
  @service emojiService;

  // @tracked => changes trigger re-render
  @tracked activeCategory = null;
  @tracked activeSkinTone = null;
  @tracked searchText = '';
  @tracked skinTonePickerVisible = false;

  allCategories = A(Object.values(categories));
  allSkintones = A(Object.values(skin_tones));

  constructor(owner, args) {
    super(owner, args);
    this.emojiService.fetchResources();
    this.setDefaults();
  }

  willDestroy() {
    super.willDestroy(...arguments);

    if (this.saveRecents) {
      this.emojiService.saveRecentEmojisToIdb();
    }
  }

  setSearchText(text) {
    this.searchText = text;
  }

  setDefaults() {
    this.activeCategory = categories[initialValues.activeCategory];
    this.activeSkinTone = skin_tones[initialValues.activeSkinTone];

    this.isCorrectSkinTone = bind(this, (emoji) => {
      if (!emoji.skintone && !emoji.skins) {
        return true;
      }

      return (
        emoji.skintone === this.activeSkinTone.index ||
        (this.activeSkinTone.index === 0 && emoji.skins?.length)
      );
    });
  }

  @action
  searchEmojis(event) {
    const searchInput = event.target.value;
    debounce(this, this.setSearchText, searchInput, 800);
  }

  @action
  handleEmojiSelect(emoji) {
    if (this.showRecents) {
      this.emojiService.addToRecentEmojis(emoji);
    }
    if (typeof this.args.onSelect === 'function') {
      this.args.onSelect(emoji);
    }
  }

  @action
  selectCategory(category) {
    this.activeCategory = category;
  }

  @action
  selectSkinTone(skinTone) {
    this.activeSkinTone = skinTone;
    this.skinTonePickerVisible = false;
  }

  @action
  toggleSkinTonePicker() {
    this.skinTonePickerVisible = !this.skinTonePickerVisible;
  }

  // Configurations: User Args OR Default
  get iconSet() {
    return this.args.iconSet ?? initialValues.iconSet;
  }
  get iconSize() {
    return this.args.iconSize ?? initialValues.iconSize;
  }
  get categoryIconSize() {
    return this.args.categoryIconSize ?? initialValues.categoryIconSize;
  }

  // Infers which TYPE of EmojiList to be shown
  get activeEmojiList() {
    return this.searchText
      ? EmojiListTypes.SEARCH_RESULT
      : this.activeCategory?.id === 'recents'
      ? EmojiListTypes.RECENT_EMOJIS
      : EmojiListTypes.DEFAULT;
  }

  get filteredCategories() {
    let filteredCategories = this.allCategories;

    // if allowed categories, only include them
    if (isPresent(this.args.allowedCategories)) {
      filteredCategories = filteredCategories.filter((cat) =>
        this.args.allowedCategories.includes(cat.id)
      );
    }
    // if disallowed categories, exclude them
    if (isPresent(this.args.disallowedCategories)) {
      filteredCategories = filteredCategories.filter(
        (cat) => !this.args.disallowedCategories.includes(cat.id)
      );
    }
    // exclude 'custom' & 'hair-color' categories
    filteredCategories = filteredCategories.filter(
      (cat) => !['custom', 'recents', 'search', 'hair-color'].includes(cat.id)
    );

    return filteredCategories;
  }

  get filteredCategoryIds() {
    return this.filteredCategories.map((cat) => cat.id);
  }

  get emojiList() {
    return this.emojiService.allEmojis.filter((emoji) => {
      return (
        isPresent(emoji.group) &&
        this.filteredCategoryIds.includes(emoji.group) &&
        emoji.version !== 13.1
      );
    });
  }

  get emojisGroupedByCategories() {
    const res = {},
      emojisByGroup = this.emojiService.emojisByGroup;

    if (isEmpty(Object.keys(emojisByGroup))) return res;

    this.filteredCategoryIds.forEach((category) => {
      if (isPresent(emojisByGroup[category])) {
        res[category] = [];

        emojisByGroup[category].forEach((emoji) => {
          if (emoji.version !== 13.1) {
            res[category].push(emoji);
          }
        });
      }
    });

    return res;
  }

  get searchResults() {
    return this.searchText.length > 3
      ? searchEmojisUtil(this.searchText, this.emojiList)
      : [];
  }

  get recentEmojis() {
    return this.args.recentEmojis ?? this.emojiService.recentEmojis;
  }
}
