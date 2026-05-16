import gulp from 'gulp';
import shell from 'gulp-shell';

const parcelTask = () => {
  return shell.task('npx parcel starter/index.html --port 1234')();
};

const defaultTask = gulp.series(parcelTask);

export default defaultTask;