import gulp from 'gulp';
import shell from 'gulp-shell';

// Default task to build and serve the project using Parcel
// This will start a server, usually at http://localhost:1234
gulp.task('default', shell.task('npx parcel starter/index.html'));

// Task to run unit tests with Mocha
gulp.task('test', shell.task('npx mocha test/shuffle.js'));

export default gulp.series('default');