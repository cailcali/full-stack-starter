const assert = require('assert');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');
const session = require('supertest-session');

const helper = require('../../helper');
const app = require('../../../app');

describe('/api/recipes', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['recipes']);
    testSession = session(app);
  });

  describe('GET /', () => {
    it('returns a list of Recipes', async () => {
      const response = await testSession.get('/api/recipes').expect(HttpStatus.OK);
      const items = response.body;
      assert.deepStrictEqual(items.length, 2);
    });
  });

  describe('GET /:id', () => {
    it('returns one Item by id', async () => {
      const response = await testSession.get('/api/recipes/2').expect(HttpStatus.OK);
      const item = response.body;
      assert.deepStrictEqual(item.Name, 'Test for fixture 2.');
      assert.deepStrictEqual(item.Category, 'Test category for fixture 2.');
      assert.deepStrictEqual(item.Picture, 'Test picture for fixture 2.');
      assert.deepStrictEqual(item.Instructions, 'Test instructions for fixture 2.');
      assert.deepStrictEqual(item.Ingredients, 'Test ingredients for fixture 2.');
    });
    it('returns NOT FOUND for an id not in the database', async () => {
      await testSession.get('/api/recipes/0').expect(HttpStatus.NOT_FOUND);
    });
  });
});
