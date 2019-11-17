import 'qunit-dom';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';

module('Integration | Component | Todo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders text', async function(assert) {
    await render(hbs`<Todo @text="Hello World" @isComplete={{false}} />`);

    assert.dom('div').includesText('Hello World');
  });

  test('it renders checkbox unchecked', async function(assert) {
    await render(hbs`<Todo @text="Hello World" @isComplete={{false}} />`);

    assert.dom("input[type='checkbox']").isNotChecked();
  });

  test('it renders checkbox checked', async function(assert) {
    await render(hbs`<Todo @text="Hello World" @isComplete={{true}} />`);

    assert.dom("input[type='checkbox']").isChecked();
  });
});
