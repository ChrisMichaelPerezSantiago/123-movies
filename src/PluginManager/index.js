const api = require('../api/api');
const PluginManager = require('./PluginManager');

module.exports = new PluginManager([api]);