import Service from '@ember/service';
import { get as getFromIdb, set as saveToIdb } from 'idb-keyval';

export default class IdbService extends Service {
  saveRecentEmojisToIdb(recentEmojis) {
    saveToIdb('recent-emojis', recentEmojis);
  }

  async fetchRecentEmojisFromIdb() {
    try {
      const res = await getFromIdb('recent-emojis');
      return res ? res : [];
    } catch (e) {
      console.error('ember-emoji-picker', e);
    }
  }
}
