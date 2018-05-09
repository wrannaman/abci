const levelup = require('levelup')
const leveldown = require('leveldown')
const fs = require('fs')

const { data_path, data_namespace } = require('../config.json');

// Create if not exists
if (!fs.existsSync(`${data_path}`)) fs.mkdirSync(`${data_path}`);
if (!fs.existsSync(`${data_path}/${data_namespace}`)) fs.mkdirSync(`${data_path}/${data_namespace}`);

// Create Store
const db = levelup(leveldown(`${data_path}/${data_namespace}`))

module.exports = db
