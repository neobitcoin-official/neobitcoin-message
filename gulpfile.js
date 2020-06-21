'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('neobitcoin-build');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
