import gulp from 'gulp'
import packageFiles from 'package-files'
import bowerFiles from 'bower-files'
import minifyCss from 'gulp-clean-css'
import concat from 'gulp-concat'

gulp.task('vendorCSS', vendorCSSTask)

function vendorCSSTask() {
  const devDependencies = [
    'mn-gh-page',
    // 'mn-card',
  ]
  const dependencies = packageFiles(devDependencies)
    .filter(dep => dep.endsWith('.css'))
    .filter(dep => !dep.includes('open-color.css'))

  const bowerDevDeps = bowerFiles()
    .ext('css')
    .dev()
    .files

  return gulp
    .src(dependencies.concat(bowerDevDeps))
    .pipe(concat('vendor.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./docs'))
}
