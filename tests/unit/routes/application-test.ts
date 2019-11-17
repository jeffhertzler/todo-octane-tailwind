import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | application', function(hooks) {
  setupTest(hooks);

  test('it defaults to an empty array for model', function(assert) {
    const route = this.owner.lookup('route:application');
    assert.deepEqual(route.model(), []);
  });
});
