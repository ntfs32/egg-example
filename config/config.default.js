'use strict';

module.exports = appInfo => {
  const config = {};

    // should change to your own
  config.keys = appInfo.name + '123456';

  config.mysql = {
    clients: {
      db1: {
        host: 'localhost', // host
        port: '3306', // 端口号
        user: 'root', // 用户名
        password: 'point9*', // 密码
        database: 'eggexample', // 数据库名
      },
      db2: {
        host: 'localhost', // host
        port: '3306', // 端口号
        user: 'root', // 用户名
        password: 'point9*', // 密码
        database: 'transfer_parameter', // 数据库名
      },
    },
    app: true, // 是否加载到 app 上，默认开启
    agent: false, // 是否加载到 agent 上，默认关闭
  };
  return config;
};

