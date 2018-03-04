var gulp = require("gulp");
var watch = require('gulp-watch');
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var tsProject = ts.createProject("tsconfig.json");
var outputDir = './dist';

gulp.task("default", function () {
    return watch('./**/*.ts', function (file) {

        console.log("Change in: \n" + file.history.join('\n'));

        return tsProject.src()
            .pipe(sourcemaps.init())
            .pipe(tsProject())
            .pipe(sourcemaps.write({sourceRoot: "."}))
            .pipe(gulp.dest(outputDir));
    });
});

gulp.task("buildTS", function () {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write({sourceRoot: "."}))
        .pipe(gulp.dest(outputDir));
});