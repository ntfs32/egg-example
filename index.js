'use strict';

// npm run dev DO NOT read this file
require('egg').startCluster({
  baseDir: __dirname,
  port: process.env.PORT || 7001, // default to 7001
  https: true,
  key: './keys/www.fullcoder.site.key',
  cert: './keys/www.fullcoder.site.crt',
});
