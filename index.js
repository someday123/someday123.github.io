$(document).ready(function(){
	$("#img1").attr("src","./images/color1.png");
	$("#img2").attr("src","./images/color1.png");
	$("#img1").css({ opacity: 0.5 });
	
	$("#img3").attr("src","./images/color2-1.png");
	$("#img4").attr("src","./images/color2-1.png");
	$("#img3").css({ opacity: 0.5 });
	
	$("#img1select").on('change', function(){
		var val = $(this).val();
		
		$("#img1").attr("src","./images/color" + val + ".png");
	});
	$("#img2select").on('change', function(){
		var val = $(this).val();
		
		$("#img2").attr("src","./images/color" + val + ".png");
	});
	
	$("#img3select").on('change', function(){
		var val = $(this).val();
		
		$("#img3").attr("src","./images/color2-" + val + ".png");
	});
	$("#img4select").on('change', function(){
		var val = $(this).val();
		
		$("#img4").attr("src","./images/color2-" + val + ".png");
	});
	
	$("#text").on("propertychange change keyup paste input", function() {
		var currentVal = $(this).val();
		
		if(currentVal == '') return;
		
		if($.isNumeric(currentVal)){
			var opacity1 = parseInt(currentVal);
			
			if(opacity1 >= 0 && opacity1 <= 100){
				$("#img1").css({ opacity: (opacity1 / 100) });
			}
		}
	});
	$("#text2").on("propertychange change keyup paste input", function() {
		var currentVal = $(this).val();
		
		if(currentVal == '') return;
		
		if($.isNumeric(currentVal)){
			var opacity1 = parseInt(currentVal);
			
			if(opacity1 >= 0 && opacity1 <= 100){
				$("#img3").css({ opacity: (opacity1 / 100) });
			}
		}
	});
});