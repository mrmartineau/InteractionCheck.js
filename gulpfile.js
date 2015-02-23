'use strict';

// Include Gulp & Tools We'll Use
var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var pkg         = require('./package.json');


var CONFIG = {
	DISTDIR : 'dist', // CONFIG.DISTDIR
	DISTNAME: 'prompt', // CONFIG.DISTNAME

	JS : {
		FILELIST : [ // CONFIG.JS.FILELIST
			'interactioncheck.js'
		]
	},

	// CONFIG.BANNER
	BANNER : ['/**',
	  ' * <%= pkg.name %> - <%= pkg.description %>',
	  ' * @version v<%= pkg.version %>',
	  ' * @link <%= pkg.homepage %>',
	  ' * @license <%= pkg.license %>',
	  ' */',
	  ''].join('\n')
};

// JAVASCRIPT
gulp.task('js', function() {
	return gulp.src(CONFIG.JS.FILELIST)
		.pipe($.sourcemaps.init())
			.pipe($.concat('interactioncheck.js'))
		.pipe($.sourcemaps.write())
		.pipe($.header(CONFIG.BANNER, { pkg : pkg } ))
		.pipe(gulp.dest(CONFIG.DISTDIR))
		.pipe($.size({title: 'Unminified js',gzip: true}))
		.pipe($.uglify())
		.pipe($.rename({suffix: '.min'}))
		.pipe($.header(CONFIG.BANNER, { pkg : pkg } ))
		.pipe(gulp.dest(CONFIG.DISTDIR))
		.pipe(reload({stream:true}))
		.pipe($.size({title: 'Minified js',gzip: true}));
});


// Serve site, watch files for changes & reload
gulp.task('serve', ['js'], function () {
	browserSync({
		notify: false,
		server: {
			baseDir: "./"
		}
	});

	gulp.watch(['interactioncheck.js'], ['js']);
	gulp.watch(['*.html'], reload({stream:true}));
});


// Build Production Files, the Default Task
gulp.task('default', function (cb) {
	runSequence('jshint', ['js'], cb);
});

// Watch task
gulp.task('watch', ['js'], function () {
	gulp.watch(['interactioncheck.js'], ['js']);
});


// Lint JavaScript
gulp.task('jshint', function () {
	return gulp.src(CONFIG.JS.FILELIST)
		.pipe(reload({stream: true, once: true}))
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});
