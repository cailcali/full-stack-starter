const assert = require('assert');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');
const session = require('supertest-session');

const helper = require('../../helper');
const app = require('../../../app');
const models = require('../../../models');

describe('/api/recipes', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['items', 'users']);
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

  context('authenticated', () => {
    beforeEach(async () => {
      await testSession
        .post('/api/auth/login')
        .set('Accept', 'application/json')
        .send({ email: 'admin.user@test.com', password: 'abcd1234' })
        .expect(HttpStatus.OK);
    });

    describe('POST /', () => {
      it('creates a new Item', async () => {
        const response = await testSession
          .post('/api/recipes')
          .set('Accept', 'application/json')
          .send({
            Name: 'This is a new Recipe name',
            Category: 'This is a new Recipe category',
            Picture: 'https://via.placeholder.com/512',
            Instructions: 'This is a new Instructions text',
            Ingredients: 'This is a new Ingredients text',
          })
          .expect(HttpStatus.CREATED);

        const { id, Name, Category, Picture, Instructions, Ingredients } = response.body;
        assert(id);
        assert.deepStrictEqual(item.Name, 'This is a new Recipe name');
        assert.deepStrictEqual(item.Category, 'This is a new Recipe category');
        assert.deepStrictEqual(item.Picture, 'https://via.placeholder.com/512');
        assert.deepStrictEqual(item.Instructions, 'This is a new Instructions text');
        assert.deepStrictEqual(item.Ingredients, 'This is a new Ingredients text');

        const item = await models.Item.findByPk(id);
        assert(item);
        assert.deepStrictEqual(item.Name, 'This is a new Recipe name');
        assert.deepStrictEqual(item.Category, 'This is a new Recipe category');
        assert.deepStrictEqual(item.Picture, 'https://via.placeholder.com/512');
        assert.deepStrictEqual(item.Instructions, 'This is a new Instructions text');
        assert.deepStrictEqual(item.Ingredients, 'This is a new Ingredients text');
      });
    });

    describe('PATCH /:id', () => {
      it('updates an existing Item', async () => {
        const response = await testSession
          .patch('/api/recipes/1')
          .set('Accept', 'application/json')
          .send({
            Name: 'This is an updated Recipe name',
            Category: 'This is an updated Recipe category',
            Picture: 'https://updated.com/url',
            Instructions: 'This is an updated Instructions text',
            Ingredients: 'This is an updated Ingredients text',
          })
          .expect(HttpStatus.OK);

        const { id, Name, Category, Picture, Instructions, Ingredients } = response.body;
        assert.deepStrictEqual(id, 1);
        assert.deepStrictEqual(item.Name, 'This is an updated Recipe name');
        assert.deepStrictEqual(item.Category, 'This is an updated Recipe category');
        assert.deepStrictEqual(item.Picture, 'https://updated.com/url');
        assert.deepStrictEqual(item.Instructions, 'This is an updated Instructions text');
        assert.deepStrictEqual(item.Ingredients, 'This is an updated Ingredients text');

        const item = await models.Item.findByPk(id);
        assert(item);
        assert.deepStrictEqual(item.Name, 'This is an updated Recipe name');
        assert.deepStrictEqual(item.Category, 'This is an updated Recipe category');
        assert.deepStrictEqual(item.Picture, 'https://updated.com/url');
        assert.deepStrictEqual(item.Instructions, 'This is an updated Instructions text');
        assert.deepStrictEqual(item.Ingredients, 'This is an updated Ingredients text');
      });
    });

    describe('DELETE /:id', () => {
      it('deletes an existing Item', async () => {
        await testSession.delete('/api/recipes/1').expect(HttpStatus.OK);
        const item = await models.Recipe.findByPk(1);
        assert.deepStrictEqual(item, null);
      });
    });
  });
});
