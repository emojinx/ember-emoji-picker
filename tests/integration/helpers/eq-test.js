import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | eq', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('val1', '1234');
    this.set('val2', '1234');

    await render(hbs`{{eq val1 val2}}`);

    assert.equal(this.element.textContent.trim(), true);
  });
});
