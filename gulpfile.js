var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

gulp.task("sass", function(){
	return gulp.src("./source/scss/*.scss")
		.pipe(sass())
		.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('html', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('background',function(){
	gulp.watch('./source/scss/*.scss',['sass']);
	gulp.watch('./source/*.html',['html']);
});

