'use strict';

module.exports = () => {
  return function* auth(next) {
    yield next;
    const headers = this.cookies;
    this.cookies.name = headers;
  };
};
