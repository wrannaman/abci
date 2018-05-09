import test from 'ava';
import fs from 'fs';
import rimraf from 'rimraf';

const { level } = require('../connection')
const { data_path, data_namespace } = require('../config.json');

test('LEVELDB connection can write', async t => {
  const put = await level.put('name', 'levelup')
  t.is(put, undefined)
  const get = await level.get('name')
  t.is(get + '', "levelup")
});


test.after.always.cb('cleanup', t => {
	// This runs after all tests
  rimraf(`${data_path}/${data_namespace}`, (e) => {
    t.is(e, null)
    t.end()
  })
});
