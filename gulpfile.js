var gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	notify = require("gulp-notify"),
  pug = require('gulp-pug'),
	browserSync = require('browser-sync');



gulp.task('sass', function(){ 
    return gulp.src('app/sass/**/*.sass') 
        .pipe(sass()) 
        .pipe(gulp.dest('app/css')) 
        .pipe(browserSync.reload({stream: true}))

});

gulp.task('pug', function() {
   return gulp.src('app/pug/**/*.pug')
       .pipe(pug({
          pretty: true
        }))
       .pipe(gulp.dest('app/'))
       .pipe(browserSync.reload({stream: true}))
});


gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app/' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass', 'pug'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за sass файлами
    gulp.watch('app/pug/**/*pug', ['pug']); // Наблюдение за pug файлами
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за html файлами
    // Наблюдение за другими типами файлов
});

gulp.task('default', ['watch']);