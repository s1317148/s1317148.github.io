$(function(){

	//画像1の文字をクリックしたら、img_switchの中にある画像をimg01.pngに変える	
	$("#menu01").click(function(){
		$("#img_switch img").attr("src", "img/img01.png");
	});
	
	//画像2の文字をクリックしたら、img_switchの中にある画像をimg02.pngに変える	
	$("#menu02").click(function(){
		$("#img_switch img").attr("src", "img/img02.png");
	});
	
	//画像3の文字をクリックしたら、img_switchの中にある画像をimg03.pngに変える	
	$("#menu03").click(function(){
		$("#img_switch img").attr("src", "img/img03.png");
	});

});