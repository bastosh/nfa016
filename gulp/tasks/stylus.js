'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');

gulp.task('stylus-main', function () {
    return gulp.src('src/stylus/main.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest('_build/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('_build/css'));
  });

gulp.task('stylus-utilities', function () {
    return gulp.src('src/stylus/utilities.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest('_build/css'))
        .pipe(gulp.dest('_build/css'));
});


gulp.task('stylus-project', function () {
    return gulp.src('src/stylus/project.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest('_build/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('_build/css'));
});

gulp.task('stylus', ['stylus-main', 'stylus-utilities', 'stylus-project']);