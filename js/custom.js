$(document).ready(function(){
	if($(window).width() < 728){
		$('.intro').hide();
		$('.logo').show();
	} else {
		$('.intro').show();
		$('.logo').hide();
	}
});