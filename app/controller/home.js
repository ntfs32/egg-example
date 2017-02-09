'use strict';

/**
 *
 */
exports.index = function* index() {
  this.body = 'hi, egg';
};

exports.about = function* () {
  this.body = this.helper.toUpperCaseFirst('about');
};
