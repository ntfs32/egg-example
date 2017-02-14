'use strict';

/**
 * 主路由文件
 * @param {object} app - app
 */
module.exports = app => {
  const auth = app.middlewares.auth();
  app.get('/', 'home.index');
  app.get('/about', auth, 'home.about');
  app.get('/info/:table_name/:id', 'home.info');
};
