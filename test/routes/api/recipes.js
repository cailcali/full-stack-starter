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
});
