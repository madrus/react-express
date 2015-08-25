var gulp = require('gulp');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var LiveServer = require('gulp-live-server');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('live-server', function () {
    var server = new LiveServer('server/main.js');
    server.start();
});

gulp.task('bundle', ['copy-css'], function () {
    return browserify({
            entries: 'app/main.jsx',
            debug: true,
        })
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./.tmp'));
});

gulp.task('copy-css', function () {
    //    gulp.src(['app/*.css', 'bower_components/skeleton/css/*.css'])
    gulp.src(['app/*.css'])
        .pipe(gulp.dest('./.tmp'));
});

gulp.task('serve', ['bundle', 'live-server'], function () {
    browserSync.init(null, {
        proxy: 'http://localhost:7777',
        port: 9001
    });
});
