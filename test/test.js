const func = require('../index')
const assert = require('assert');

describe('Test', () => {

  it('test', function() {
    assert.deepStrictEqual(func('text'), 'text')
  })  

});

