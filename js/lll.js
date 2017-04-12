$(function(){

	// 获取窗口宽度，根据窗口宽度大小，选择显示图片
	function resize(){
		var cWidth = $(".carousel").width();
		var lgUrl = $(".carousel .item").each(function(index, el) {
		var src = cWidth > 768 ? $(el).data("image-large"):$(el).data("image-small");
		
		// cWidth > 768 ? $(el).css({"background":"url(" + src + ") no-repeat center center","background-size":"cover"}):$(el).html("<img src="+src+" alt=''>" );
		$(el).css({"background":'url(' + src +') no-repeat center center',
 	 			"background-size":"cover"
 	});
		});
	}
	$(window).on("resize",resize).trigger('resize');


  $('[data-toggle="tooltip"]').tooltip();

})