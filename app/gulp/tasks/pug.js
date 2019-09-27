module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src('./app/source/pug/*.pug')
            .pipe($.gp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('./app/build'));
        // .on('end', browserSync.reload);
    });
};