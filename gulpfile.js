var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var concat = require("gulp-concat");
var inject = require('gulp-inject');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
var uglify = require('gulp-uglify');
var series = require('stream-series');

var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('default', ['build-server', 'inject-js', 'styles', 'browser-sync'], function () {
    gulp.watch('**/*.ts', ['build-server', 'inject-js', browserSync.reload]);
    gulp.watch('./sass/**/*.scss', ['styles']);
    gulp.watch('./public/**/*.html', ['bs-reload']);
});

gulp.task('build-server', function () {
    var tsProject = ts.createProject("./server/tsconfig.json");
    return gulp.src('./server/**/*.ts')
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest('./server'))
});

gulp.task('tslint', function () {
    return gulp.src('./public/**/*.ts')
        .pipe(tslint({
            // contains rules in the tslint.json format
            configuration: "./tslint.json"
        }))
        .pipe(tslint.report("verbose"));
});

gulp.task('build-app', function () {
    var tsProject = ts.createProject('./public/tsconfig.json');
    var tsResult = gulp.src('./public/app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'))
});

gulp.task('bundle-app', ['build-app'], function () {
    return gulp.src('./public/app/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('styles', function () {
    var cssStream = gulp
        .src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/dist/css'));

    return gulp.src("./public/dist/app.html")
        .pipe(inject(cssStream, {relative: true}))
        .pipe(gulp.dest('./public/dist'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', ['nodemon'], function () {
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
            if (!called) {
                cb();
            }
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

gulp.task('bundle-vendor', function () {
    return gulp.src([
            './public/libs/build/angular2-polyfills.min.js',
            './public/libs/build/system.js',
            './public/libs/build/Rx.min.js',
            './public/libs/build/angular2.min.js',
            './public/libs/build/http.min.js',
            './public/libs/build/router.min.js',
            './public/libs/ng2-bootstrap/ng2-bootstrap.min.js',
            './public/libs/ng2-bootstrap/ng2-charts.min.js',
            './public/libs/ng2-material/ng2-material.min.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('uglify-app', function () {
    return gulp.src('./public/dist/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/minimized'));
});

gulp.task('inject-js', ['build-app', 'bundle-vendor'], function () {
    var vendorStream = gulp.src(['./public/dist/js/vendor.js'], {read: false});

    var appStream = gulp.src(['./public/dist/js/app.js'], {read: false});

    return gulp.src("./public/dist/app.html")
        .pipe(inject(series(vendorStream, appStream), {relative: true}))
        .pipe(gulp.dest('./public/dist'));
});
