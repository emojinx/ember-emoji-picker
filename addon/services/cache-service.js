import Service from '@ember/service';

export default class IdbService extends Service {
  cacheAvailable = 'caches' in self;

  async getCachedOrFetch(reqData) {
    if (!this.cacheAvailable) {
      const response = await fetch(reqData);
      return response;
    }

    try {
      const cache = await caches.open('ember-emoji-picker');
      const response = await cache.match(reqData);

      if (response) {
        return response;
      } else {
        const resData = await fetch(reqData);
        cache.put(reqData, resData);
        return resData;
      }
    } catch (e) {
      console.error('ember-emoji-picker', e);
    }
  }
}
