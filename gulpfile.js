var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var less = require("gulp-less");
var cssnano = require("gulp-cssnano");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var browserSync = require("browser-sync").create();

// 1.css编译、压缩

gulp.task("style",function(){
	gulp.src("css/*.less")//找出要编辑的文件
		.pipe(less())//编译
		.pipe(cssnano())//压缩css文件
		.pipe(gulp.dest("dist/styles"))//设置输出路径
		.pipe(browserSync.reload({stream:true}));
});


//2.js 合并，压缩
gulp.task("js",function(){
	gulp.src("js/*.js")//找出文件
		.pipe(concat("all.js"))//编辑
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"))
		.pipe(browserSync.reload({stream:true}));
});

// 3.html压缩、去掉注释
gulp.task("html",function(){
	gulp.src("html/*.html")
		.pipe(htmlmin({
			collapseWhitespace:true,
			removeComments:true
		}))
		.pipe(gulp.dest("dist"))
		.pipe(browserSync.reload({stream:true}));
});

//4. 图片
gulp.task("images",function(){
	gulp.src("images/*.*")
		.pipe(gulp.dest("dist/images"))
		.pipe(browserSync.reload({stream:true}));
});

//5. 整合

gulp.task("workflow",["style","js","html","images"],function(){
	browserSync.init({
		server:{
			baseDir:"./dist",
			index:"ll.html"
		}
	});
	gulp.watch("css/*.less",["style"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch("html/*.html",["html"]);
	gulp.watch("images/*.*",["images"]);
});