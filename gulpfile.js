'use strict';

const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc');

gulp.task('generate', function() {
  return gulp.src('./app/*.js')
            .pipe(jsdoc('./documentation-output'));
});
gulp.task('watch', function() {
  gulp.watch('./app/*.js', [ 'generate' ]);
});
gulp.task('default', [ 'generate' ]);
