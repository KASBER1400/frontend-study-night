import gulp from 'gulp';
import shell from 'gulp-shell';

// Task to run Parcel (build and serve)
export const parcel = shell.task('npx parcel starter/index.html --port 1234');

// Task to run simple test (Node.js compatible without Mocha)
export const test = shell.task('node run-tests.js');

// Task to run Cypress (requires server to be running first)
export const cypress = shell.task('npx cypress run');

// Default task
export default parcel;