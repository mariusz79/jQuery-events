$(document).ready(function() {
 

 	$("#stream1_btn").click(function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").mouseenter(function () {					//works like hover
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").mouseleave(function () {				//triggers when mouse leaves element
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").click(function(){
		$("p").addClass('red');
	});
	$("h2").mouseenter(function(){
		$("h2").addClass('light-blue');
	});
	$("#h20").mouseenter(function () {
		$("#h20").addClass('increase-font-size');
		$("#h21").removeClass('increase-font-size');
		$("#h22").removeClass('increase-font-size');
		$("#h23").removeClass('increase-font-size');
		$("#h24").removeClass('increase-font-size');
		$("#h25").removeClass('increase-font-size');
	});
	$("#h21").mouseenter(function () {
		$("#h21").addClass('increase-font-size');
		$("#h20").removeClass('increase-font-size');
		$("#h22").removeClass('increase-font-size');
		$("#h23").removeClass('increase-font-size');
		$("#h24").removeClass('increase-font-size');
		$("#h25").removeClass('increase-font-size');
	});
	$("#h22").mouseenter(function () {
		$("#h22").addClass('increase-font-size');
		$("#h20").removeClass('increase-font-size');
		$("#h21").removeClass('increase-font-size');
		$("#h23").removeClass('increase-font-size');
		$("#h24").removeClass('increase-font-size');
		$("#h25").removeClass('increase-font-size');
	});
	$("#h23").mouseenter(function () {
		$("#h23").addClass('increase-font-size');
		$("#h21").removeClass('increase-font-size');
		$("#h22").removeClass('increase-font-size');
		$("#h20").removeClass('increase-font-size');
		$("#h24").removeClass('increase-font-size');
		$("#h25").removeClass('increase-font-size');
	});
	$("#h24").mouseenter(function () {
		$("#h24").addClass('increase-font-size');
		$("#h21").removeClass('increase-font-size');
		$("#h22").removeClass('increase-font-size');
		$("#h23").removeClass('increase-font-size');
		$("#h20").removeClass('increase-font-size');
		$("#h25").removeClass('increase-font-size');
	});
	$("#h25").mouseenter(function () {
		$("#h25").addClass('increase-font-size');
		$("#h21").removeClass('increase-font-size');
		$("#h22").removeClass('increase-font-size');
		$("#h23").removeClass('increase-font-size');
		$("#h24").removeClass('increase-font-size');
		$("#h20").removeClass('increase-font-size');
	});
	$(".bottom_button").mouseenter(function(){
		$("body").css("background-color", "black");
	});
	$(".bottom_button").mouseleave(function () {
		$("body").css("background-color", "grey");
	});
}); 