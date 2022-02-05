import { modifier } from 'ember-modifier';

export default modifier((element, [category]) => {
  const yOffset = element.querySelector(`.emoji-picker-emojis__category--${category.id}`)?.offsetTop;

  element.scrollTo({ top: yOffset, behavior: 'smooth' });
});
