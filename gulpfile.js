var gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	notify = require("gulp-notify"),
	browserSync = require('browser-sync');



gulp.task('sass', function(){ 
    return gulp.src('app/sass/**/*.sass') 
        .pipe(sass()) 
        .pipe(gulp.dest('app/css')) 
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

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за sass файлами
    gulp.watch('app/index.html', browserSync.reload); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});

gulp.task('default', ['watch']);