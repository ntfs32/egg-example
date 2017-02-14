'use strict';

/**
 * 首页
 */
exports.index = function* index () {
  this.body = 'hi, egg';
};

/**
 * About
 */
exports.about = function * () {
  // this.body = this.helper.toUpperCaseFirst('about')
  this.body = this.service.kafka.getKafka();
};

/**
 * 获取用户信息
 */
exports.info = function * () {
  const table_name = this.params.table_name;
  const primary_key = this.params.id;
  const user_info = yield this.service.tables.find(table_name, primary_key);
  this.body = user_info;
};
