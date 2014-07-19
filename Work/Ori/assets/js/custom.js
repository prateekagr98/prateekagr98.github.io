$(document).ready(function(){

	if($('.rslides').get(0)){
		$('.rslides').responsiveSlides();
	}

	if($('.bxslider').get(0)){
		$('.bxslider').bxSlider({
  			pagerCustom: '#bx-pager',
  			captions: true,
  			adaptiveHeight: false,
  			controls: false
		});
	}
});