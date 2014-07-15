$(document).ready(function(){
	if($('.slideshow').get(0)){
		$('.slideshow').cycle('fade');
	}

	if($('.bxslider').get(0)){
		$('.bxslider').bxSlider({
  			pagerCustom: '#bx-pager',
  			captions: true,
  			adaptiveHeight: true,
		});
	}
});