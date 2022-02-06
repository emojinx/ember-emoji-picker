import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class EmojisComponent extends Component {
  intersectionObserver = null;
  activeCategoryOnScreen = null;

  constructor(owner, args) {
    super(owner, args);
    this.activeCategoryOnScreen = this.args.activeCategory;
  }

  @action
  createIntersectionObserver(element) {
    const options = {
      root: element,
      rootMargin: '4px',
      threshold: [0.5, 1],
    };

    const callback = (entries) => {
      if (entries.length && entries[0].isIntersecting) {
        const categoryId = entries[0].target.dataset.categoryid;

        if (this.activeCategoryOnScreen !== categoryId) {
          this.activeCategoryOnScreen = categoryId;
        }

        this.args.onScrollToCategory(categoryId);
      }
    };

    this.intersectionObserver = new IntersectionObserver(callback, options);
  }

  @action
  destroyIntersectionObserver() {
    this.intersectionObserver && this.intersectionObserver.disconnect();
  }

  @action
  registerInsersectionObserver(element) {
    this.intersectionObserver && this.intersectionObserver.observe(element);
  }

  @action
  unregisterInsersectionObserver(element) {
    this.intersectionObserver && this.intersectionObserver.unobserve(element);
  }

  @action
  scrollToActiveCategory(element, [activeCategory]) {
    if (this.activeCategoryOnScreen !== activeCategory.id) {
      const yOffset = element.querySelector(
        `.emoji-picker-emojis__category--${activeCategory.id}`
      )?.offsetTop;

      element.scrollTo({ top: yOffset });

      this.activeCategoryOnScreen = activeCategory.id;
    }
  }
}
