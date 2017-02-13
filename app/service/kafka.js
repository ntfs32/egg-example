'use strict';

module.exports = app => {
  /**
   * Kafka类，用于获取数据表信息
   *
   * @class Kafka
   * @extends {app.Service}
   */
  class Kafka extends app.Service {
    /**
     * 构造方法，选择数据库连接
     * @param {any} ctx - ctx
     * @memberOf User
     */
    constructor (ctx) {
      super(ctx);
      this.kafka = this.app.kafka;
    }

    getKafka () {
      return this.kafka;
    }
  }
  return Kafka;
};
