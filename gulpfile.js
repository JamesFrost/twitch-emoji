var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('default', [ 'build-all', 'build-global' ]);

gulp.task('build-all', function() 
{
    gulp.src('twitchemoji.js')
        .pipe(browserify({
          insertGlobals : true,
          standalone : 'twitchEmoji'
        }))
        .pipe(uglify())
        .pipe(rename({
        	suffix : '.min'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-global', function() 
{
    gulp.src('twitchemoji.globalonly.js')
        .pipe(browserify({
          insertGlobals : true,
          standalone : 'twitchEmoji'
        }))
        .pipe(uglify())
        .pipe(rename({
        	suffix : '.min'
        }))
        .pipe(gulp.dest('./dist'));
});
