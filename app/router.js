'use strict';

/**
 * 主路由文件
 * @param {object} app - app
 */
module.exports = app => {
  app.get('/', 'home.index');
  app.get('/about', 'home.about');
  app.get('/info/:table_name/:id', 'home.info');
};
