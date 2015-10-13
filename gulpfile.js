var gulp = require('gulp'),
	util = require('gulp-util'),
	plumber = require('gulp-plumber'),
	path = require('path'),
	exec = require('child_process').exec,
	freshBlogFilesPath = path.join(process.cwd(), 'public'),
	blogRepoPath = 'd:/code/blog';

gulp.task('default', function (taskCallback){
	gulp.start('deploy');
	taskCallback();
});

gulp.task('deploy', ['copyfiles', 'push'], function (taskCallback){
	util.log('Deployed !');
	taskCallback();
});

gulp.task('copyfiles', function (taskCallback){
	var source = path.join(freshBlogFilesPath, '**/*.*'),
		dest = path.join(blogRepoPath, 'public');
	util.log('Copying blog files from ' + source + ' to ' + dest);
	gulp.src(source)
		.pipe(plumber())
		.pipe(gulp.dest(dest))
		.on('end', function (callback){
			util.log('Copy successful.')
			taskCallback();
		});
});

gulp.task('push', ['gitpush'], function (taskCallback){
	util.log('Pushed changes to remote host via Git')
	taskCallback();
});

gulp.task('gitadd', function (taskCallback){
	util.log('Adding files to local repo.');
	var cmd = "git add -A ";
	exec(cmd, {cwd: blogRepoPath, maxBuffer: 1024 * 1024}, function(err, stdout, stderr){
		util.log(stdout, stderr);
		if(err) return taskCallback(err);
		taskCallback();
	});
});

gulp.task('gitcommit', ['gitadd'], function (taskCallback){
	util.log('Committing to local repo.');
	var now = new Date(),
		cmd = 'git commit -a -m "Deployment ' +
		[now.getDate(), now.getMonth(), now.getFullYear()].join('/') + ' ' +
		[now.getHours(), now.getMinutes(), now.getSeconds()].join(':') + '"';
	exec(cmd, {cwd: blogRepoPath, maxBuffer: 1024 * 1024}, function(err, stdout, stderr){
		util.log(stdout, stderr);
		if(err) return taskCallback(err);
		taskCallback();
	});
});

gulp.task('gitpush', ['gitcommit'], function (taskCallback){
	util.log('Pushing to remote repo.');
	var cmd = "git push";
	exec(cmd, {cwd: blogRepoPath, maxBuffer: 1024 * 1024}, function(err, stdout, stderr){
		if(err) return taskCallback(err);
		util.log(stdout, stderr);
		taskCallback();
	});
});
