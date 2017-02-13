'use strict';

// had enabled by egg
exports.static = true;

// 开启mysql支持
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
};

// 倒入本地开发的kafka插件
const path = require('path');
exports.kafka = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-kafka')
};
