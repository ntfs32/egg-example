'use strict';

module.exports = app => {
  /**
   * Tables类，用于获取数据表信息
   *
   * @class Tables
   * @extends {app.Service}
   */
  class Tables extends app.Service {
    /**
     * 构造方法，选择数据库连接
     * @param {any} ctx - ctx
     * @memberOf User
     */
    constructor(ctx) {
      super(ctx);
      this.mysql = this.app.mysql.get('db2');
    }

    /**
     * 使用uid获取用户信息
     * @param {string} table_name - 表名
     * @param {any} primary_key - primary key
     * @return {GeneratorFunction} - 返回用户信息
     * @memberOf User
     */
    * find(table_name, primary_key) {
      const user_info = yield this.mysql.get(table_name, { id: primary_key });
      return user_info;
    }
  }
  return Tables;
};
