var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var jsonfile = require('jsonfile')

gulp.task('default', [ 'build', 'gen-sub' ]);

gulp.task('gen-sub', function() 
{
    const subscriberSet = jsonfile.readFileSync( './json/v2/subscriber.json' );
    const subscriberTemplate = subscriberSet.template;

    for( var index in subscriberSet.channels )
    {
        const file = `./dist/channels/${index}.json`;

        const channels = {};
        channels[ index ] = subscriberSet.channels[ index ];

        const obj = 
        {
            template : subscriberTemplate,
            channels : channels
            
        };
         
        jsonfile.writeFileSync( file, obj );
    }
});

gulp.task('build', function() 
{
    return gulp.src('twitchemoji.js')
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
