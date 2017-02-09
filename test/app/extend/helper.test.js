'use strict';


describe('test/app/helper/format.test.js', () => {

    it('Test Function toUpperCaseFirst()', () => {
        assert(ctx.helper.toUpperCaseFirst('about') === 'About');
    });
});