import 'qunit-dom';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import { render, fillIn, triggerKeyEvent } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';

module('Integration | Component | Prompt', function(hooks) {
  setupRenderingTest(hooks);

  test('it allows entering text and clearing when pressing <Enter>', async function(assert) {
    this.setProperties({
      create(text: string) {
        assert.equal(text, 'test');
      },
    });

    await render(hbs`<Prompt @create={{this.create}} />`);

    assert.dom('input').hasValue('');

    await fillIn('input', 'test');
    await triggerKeyEvent('input', 'keyup', 'Enter');

    assert.dom('input').hasValue('');
  });
});
