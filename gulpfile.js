var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('default', [ 'build-all', 'build-global' ]);

gulp.task('build-all', function() 
{
    gulp.src('index.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-global', function() 
{
    gulp.src('global-only.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(gulp.dest('./dist'));
});
