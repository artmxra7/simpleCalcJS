
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browsersync = require('browser-sync');
var webpack = require('webpack-stream');


gulp.task("sass", function(){
  return gulp.src("./resource/assets/sass/**/*.scss")
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('./public/assets/css'))
})

gulp.task("script", function(){
  return gulp.src("./resource/assets/js/**/*.js")
  .pipe(webpack(require("./webpack.config.js")))
  .pipe(gulp.dest('./public/assets/js'))
})

gulp.task("serve", function(){
  browsersync.init({
    server:{
      baseDir: './public/'
    }
  })

  gulp.watch("./resource/assets/sass/**/*.scss", gulp.series('sass'));
  gulp.watch("./resource/assets/js/**/*.js", gulp.series('script'));
  gulp.watch("./public/assets/css/**/*.css").on('change', browsersync.reload)
  gulp.watch("./public/assets/js/**/*.js").on('change', browsersync.reload)
  gulp.watch("./public/*.html").on('change', browsersync.reload)
})