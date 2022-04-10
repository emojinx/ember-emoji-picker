import { A } from '@ember/array';
import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { findEmojisBy as findEmojis } from '../utils/emoji-utils';
import { groupedEmojiList } from '../constants/asset-urls'

export default class EmojiService extends Service {
  @service cacheService;
  @service idbService;

  @tracked fetching = false;
  @tracked allEmojis = A([]);
  @tracked recentEmojis = A([]);
  @tracked emojisByGroup = {};

  _extractEmojiListFromGroupedEmojis(emojisByGroup) {
    let emojiList = [];

    for (const group in emojisByGroup) {
      emojiList = emojiList.concat(emojisByGroup[group]);
    }

    return emojiList;
  }

  _setEmojiProperties(emojisByGroup, recentEmojis) {
    const emojiList = this._extractEmojiListFromGroupedEmojis(emojisByGroup);

    this.allEmojis = emojiList;
    this.emojisByGroup = emojisByGroup;
    this.recentEmojis = recentEmojis;
  }

  async _fetchEmojisJsonData() {
    const url = groupedEmojiList;
    const response = await this.cacheService.getCachedOrFetch(url);
    const emojiJsonData = await response.json();

    return emojiJsonData;
  }

  _fetchRecentEmojis() {
    return this.idbService.fetchRecentEmojisFromIdb();
  }

  async fetchResources() {
    this.fetching = true;

    try {
      const [emojisByGroup, recentEmojis] = await Promise.all([
        this._fetchEmojisJsonData(),
        this._fetchRecentEmojis(),
      ]);
      this._setEmojiProperties(emojisByGroup, recentEmojis);
    } catch (e) {
      console.error('ember-emoji-picker', e);
    } finally {
      this.fetching = false;
    }
  }

  addToRecentEmojis(emoji) {
    this.recentEmojis.push(emoji);
  }

  findEmojisBy(key, val) {
    return findEmojis(key, val, this.allEmojis);
  }
}
