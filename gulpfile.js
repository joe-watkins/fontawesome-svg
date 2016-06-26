// todo cleanup tasks at bottom

'use strict';

// Load plugins
var gulp = require('gulp'),
    svgmin = require('gulp-svgmin'),
    notify = require('gulp-notify'),
    svgstore = require('gulp-svgstore'),
    cheerio = require('gulp-cheerio'),
    svg2png = require('gulp-svg2png'),
    rename = require('gulp-rename'),
    appDefaults = require("./config.json");

    // Gulpfile
    function gulpfile(){
      return gulp.src('gulpfile.js')
        .pipe(notify({ message: 'Gulpfile Changed!!' }));
    }

    // svgmin
    function minifySvg(){
      return gulp.src(appDefaults.iconsDir+"*.svg")
        .pipe(svgmin())
        .pipe(gulp.dest(appDefaults.iconsDir));
    }

    // svgStore
    function svgStore(){
      return gulp.src(appDefaults.imagesDir+"/icons/*.svg")
        .pipe(svgmin())
        .pipe(svgstore()) // svgStore
        .pipe(cheerio(function ($, file) { // add display: none;
          $('svg').attr("style","display:none");
          $('[fill]').removeAttr('fill');
        }))
        .pipe(rename(appDefaults.svgDefsOutput))
        .pipe(gulp.dest(appDefaults.imagesDir));
    }

    // svg to png
    function svgtopng(){
      return gulp.src(appDefaults.imagesDir+"/**/*.svg")
        .pipe(svg2png())
        .pipe(gulp.dest(appDefaults.imagesDir+'/fallbacks'));
    }


    gulp.task('svg',gulp.parallel(svgStore));
    gulp.task('default', function() {});
