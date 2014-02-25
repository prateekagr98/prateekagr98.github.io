$(document).ready(function(){
	set_logo();
});

$(window).resize(function(){
	set_logo();
});

function set_logo(){
	if($(window).width() <= 728){
		$('.intro').hide();
		$('.logo').show();
	} else {
		$('.intro').show();
		$('.logo').hide();
	}
}