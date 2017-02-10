'use strict';

module.exports = appInfo => {
  const config = {};

    // should change to your own
  config.keys = appInfo.name + '123456';

  return config;
};

exports.mysql = {
    // 单数据库信息配置
  client: {
        // host
    host: '127.0.0.1',
        // 端口号
    port: '3306',
        // 用户名
    user: 'root',
        // 密码
    password: 'point9*',
        // 数据库名
    database: 'egg_example',
  },
    // 是否加载到 app 上，默认开启
  app: true,
    // 是否加载到 agent 上，默认关闭
  agent: false,
};
