const assert = require('assert');

const helper = require('../helper');
const models = require('../../models');

describe('models.Recipe', () => {
  beforeEach(async () => {
    await helper.loadFixtures([]);
  });

  it('creates a new Item record', async () => {
    let item = models.Recipe.build({
      Name: 'Test Title',
      Picture: 'This is longer test Text.',
    });
    assert.deepStrictEqual(item.id, null);
    await item.save();
    assert(item.id);

    item = await models.Recipe.findByPk(item.id);
    assert.deepStrictEqual(item.Name, 'Test Title');
    assert.deepStrictEqual(item.Picture, 'This is longer test Text.');
  });
});
