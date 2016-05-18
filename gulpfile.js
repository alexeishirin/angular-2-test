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
var path = require('path');
var systemBuilder = require('systemjs-builder');
var babel = require('gulp-babel');

var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('default', ['build-server', 'inject-js', 'styles', 'browser-sync'], function () {
    gulp.watch('**/*.ts', ['build-server', 'inject-js', browserSync.reload]);
    gulp.watch('./sass/**/*.scss', ['styles']);
    gulp.watch('./client/**/*.html', ['bs-reload']);
});

gulp.task('build-server', function () {
    var tsProject = ts.createProject("./server/tsconfig.json");
    return gulp.src('./server/**/*.ts')
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest('./server'))
});

gulp.task('tslint', function () {
    return gulp.src('./client/**/*.ts')
        .pipe(tslint({
            // contains rules in the tslint.json format
            configuration: "./tslint.json"
        }))
        .pipe(tslint.report("verbose"));
});

gulp.task('build-app', function () {
    var tsProject = ts.createProject('./client/tsconfig.json');
    var tsResult = gulp.src('./client/app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./client'))
});

gulp.task('system-js-build', function () {
    var builder = new systemBuilder('', './systemjs.config.js');
    return builder
        .buildStatic('app/bootstrap.ts', './client/dist/js/app.js', {mangle: false})
        .then(function() {
            console.log('Build complete');
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
    
});

gulp.task('bundle-app', ['system-js-build'], function () {
    return gulp.src('./client/dist/js/app.js')
        // .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(babel({
            plugins: [
                'transform-es2015-template-literals'
            ]
        }))
        // .pipe(uglify({mangle: false}).on('error', function(e){
        //     console.log(e);
        // }))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./client/dist/js'));
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('styles', function () {
    var cssStream = gulp
        .src([
            './client/app/components/**/*.scss',
            './sass/**/*.scss'
        ])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./client/dist/css'));

    return gulp.src("./client/dist/app.html")
        .pipe(inject(cssStream, {relative: true}))
        .pipe(gulp.dest('./client/dist'))
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
            './node_modules/es6-shim/es6-shim.min.js',
            './node_modules/zone.js/dist/zone.js',
            './node_modules/reflect-metadata/Reflect.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./client/dist/js'));
});

gulp.task('uglify-app', function () {
    return gulp.src('./client/dist/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./client/dist/minimized'));
});

gulp.task('inject-js', ['bundle-app', 'bundle-vendor'], function () {
    var vendorStream = gulp.src(['./client/dist/js/vendor.js'], {read: false});

    var appStream = gulp.src(['./client/dist/js/app.js'], {read: false});

    return gulp.src("./client/dist/app.html")
        .pipe(inject(series(vendorStream, appStream), {relative: true}))
        .pipe(gulp.dest('./client/dist'));
});
