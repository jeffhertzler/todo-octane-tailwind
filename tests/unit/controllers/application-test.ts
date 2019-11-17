import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  test('it defaults to empty array', function(assert) {
    const controller = this.owner.lookup('controller:application');
    assert.deepEqual(controller.model, []);
  });

  test('it adds to Todo to array when create is called', function(assert) {
    const controller = this.owner.lookup('controller:application');

    controller.create('test');

    assert.deepEqual(controller.model, [
      {
        text: 'test',
        isComplete: false,
      },
    ]);
  });
});
