//安装gulp完成配置
var gulp=require('gulp');
var load=require('gulp-load-plugins')
//安装jshint完成配置
//引入代码压缩插件
/*var uglify=require('gulp-uglify');
//引入编译less插件
var less=require('gulp-less');
//引入重命名插件
var rename=require('gulp-rename');
//引入文件合并插件
var concat=require('gulp-concat');
//引入css文件压缩插件
var cleanCss=require('gulp-clean-css');
//引入代码检查插件
var jshint=require('gulp-jshint');
//引入图片压缩插件
var imagemin=require('gulp-imagemin');
//gulp当做服务器
var connect=require('gulp-connect');*/

//完成代码压缩
gulp.task('yasuo',function(){
	gulp.src('src/js/pub.js')
	.pipe(load.uglify())
	.pipe(gulp.dest('dest/js'))
})
//编译less
gulp.task('lessTocss',function(){
	gulp.src('src/css/style.less')
		.pipe(load.less())
		.pipe(gulp.dest('dest/css'))
})
//监听
/*gulp.task('default',function(){
	gulp.watch(['src/js/*.js','src/css/*.less'],['yasuo','lessTocss'])
})*/
//重命名
gulp.task('default',function(){
	gulp.src('src/js/pub.js')
		.pipe(load.uglify())
		.pipe(load.rename({
			suffix:'.min'
		}))
		.pipe(gulp.dest('dest/js'))
})
//文件合并
gulp.task('concat',function(){
	gulp.src('src/js/*.js')
		.pipe(load.concat('all.js'))
		.pipe(gulp.dest('dest/js'))
})
//css文件压缩
gulp.task('yasuos',function(){
	gulp.src('src/css/*')
		.pipe(load.cleanCss())
		.pipe(gulp.dest('dest/css'))
})
/*gulp.task('zipcss',function(){
	gulp.src('src/css/style.css')
		.pipe(cleanCss())
		.pipe(gulp.dest('dest/css'))
})*/
//代码检查
gulp.task('check',function(){
	return gulp.src('src/js/*.js')
				.pipe(load.jshint())
				.pipe(jshint.reporter('default'))
})
//先检查、再压缩
gulp.task('yasuo',['check'],function(){
	gulp.src('src/js/pub.js')
		.pipe(load.uglify())
		.pipe(load.rename({
			suffix:'.min'
		}))
		.pipe(gulp.dest('dest/js'))
})
//压缩图片
gulp.task('imagemin',function(){
	gulp.src('src/images/*.png')
		.pipe(load.imagemin())
		.pipe(gulp.dest('dest/images'))
})
//gulp当做静态服务器
gulp.task('run',function(){
	connect.server({
		root:'dest',
		port:8888,
		livereload:true//实时刷新浏览器
	})
})
//加载html
gulp.task('html',function(){
	gulp.src('dest/html/*')
		.pipe(connect.reload())
})
//监听
gulp.task('watch',function(){
	gulp.watch(['dest/html/*'],['html'])
})
//监听，实时刷新浏览器同步执行
gulp.task('default',['run','watch'])