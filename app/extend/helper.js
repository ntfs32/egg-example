'use strict';

const url = require('url');


module.exports = {
    /**
     * 字符串首字母大写
     * @method Helper#toUpperCaseFirst
     * @param {String} str - String Name
     * @return {String} str 
     * @example
     * ```js
     * helper.toUpperCaseFirst('about')
     * => About
     * ```
     */
    toUpperCaseFirst(str) {
        return str[0].toUpperCase() + str.substring(1);
    },

};