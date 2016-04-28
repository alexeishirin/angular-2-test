var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');
var reload  = browserSync.reload;
var pluginAutoprefix = require('less-plugin-autoprefix');
var less = require('gulp-less');
var notify = require("gulp-notify");
var cssmin = require("gulp-cssmin");
var sourcemaps = require('gulp-sourcemaps');

var BROWSER_SYNC_RELOAD_DELAY = 500;

const autoprefix = new pluginAutoprefix({ browsers: ["iOS >= 7", "Chrome >= 30", "Explorer >= 9", "last 2 Edge versions", "Firefox >= 20"] });

gulp.task('buildServer', function () {
    var tsProject = ts.createProject("./server/tsconfig.json");
    return gulp.src('./server/**/*.ts')
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest('./server'))
});

gulp.task('build-app', function(){
    var tsProject = ts.createProject('./public/tsconfig.json');
    var tsResult = gulp.src('./public/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'))
});

gulp.task('watch', function() {
    gulp.watch('./server/**/*.ts', ['buildServer']);
});
gulp.task('start', function () {
    nodemon({
        script: './server/server.js'
        , ext: 'ts html css'
        , tasks: ['buildServer']
    })
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('styles', function () {
    return gulp.src('./public/less/**/*.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .on("error", notify.onError({
            message: 'LESS compile error: <%= error.message %>'
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync({
        proxy: "localhost:8080",  // local node app address
        port: 5000,  // use *different* port than above
        notify: true
    });
});

gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
        script: './server/server.js'
    })
        .on('start', function onStart() {
            // ensure start only got called once
            if (!called) { cb(); }
            called = true;
        })
        .on('restart', function onRestart() {
            // reload connected browsers after a slight delay
            setTimeout(function reload() {
                browserSync.reload({
                    stream: false
                });
            }, BROWSER_SYNC_RELOAD_DELAY);
        });
});

gulp.task('default', ['buildServer', 'build-app', 'styles', 'browser-sync'], function () {
    gulp.watch('**/*.ts',   ['buildServer', 'build-app', browserSync.reload]);
    gulp.watch('./public/**/*.less',  ['styles']);
    gulp.watch('./public/**/*.html', ['bs-reload']);
});
