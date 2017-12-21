'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var rimraf = require('rimraf').sync;
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var CONFIG = require('../config.js');

// Erases the dist folder
gulp.task('cleanDist', function () {
  rimraf('dist');
});

// Copies static assets and built files
gulp.task('copyDist', function () {
  gulp.src(CONFIG.DIST_FILES)
    .pipe(gulp.dest('dist'));
  gulp.src(CONFIG.PAGES_DIST)
    .pipe(gulp.dest('dist'));
  gulp.src(CONFIG.ARTICLES_2017)
    .pipe(gulp.dest('./dist/articles/2017'));
  gulp.src(CONFIG.TAGS)
    .pipe(gulp.dest('./dist/tags'));
});

// Optimizes images
gulp.task('imagemin', function () {
    gulp.src(CONFIG.IMG)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('useref', function () {
    gulp.src('_build/index.html')
        .pipe(useref())
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('dist'));
  });
