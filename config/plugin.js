'use strict';

// had enabled by egg
exports.static = true;

// 开启mysql支持
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
};

// 倒入本地开发的kafka插件
exports.kafka = {
  enable: true,
  package: 'egg-kafka'
};
