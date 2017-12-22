'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var CONFIG = require('../config.js');

// Builds html
gulp.task('pug', function () {
    gulp.src('src/pug/pages/index.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true,
          }))
        .pipe(gulp.dest('./_build'));
    gulp.src(CONFIG.PUG_PAGES)
        .pipe(plumber())
        .pipe(pug({
            pretty: true,
          }))
        .pipe(gulp.dest('./_build/pages'));
    gulp.src(CONFIG.PUG_ARTICLES17)
        .pipe(plumber())
        .pipe(pug({
            pretty: true,
          }))
        .pipe(gulp.dest('./_build/articles/2017'));
    gulp.src(CONFIG.PUG_TAGS)
        .pipe(plumber())
        .pipe(pug({
            pretty: true,
          }))
        .pipe(gulp.dest('./_build/tags'));
  });
